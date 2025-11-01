import * as React from 'react';
import { ITag } from './models';
import { IAnnotationService } from './services/IAnnotationService';
import { TagLoaderComponent } from './TagLoaderComponent';
import { WarningTagComponent } from './WarningTagComponent';
import { TagComponent } from './TagComponent';

export interface IMainContainerProps {  
  entityId: string | null;   
  clientUrl: string | null;
  annotationService: IAnnotationService;
}

const MainContainerComponent: React.FC<IMainContainerProps> = ({entityId, clientUrl, annotationService}) => { 
  const [Loading, setLoading] = React.useState<boolean>(false);
  const [tags, setTags] = React.useState<ITag[] | null >(null);

  React.useEffect(() =>{
    const fetchAnnotations = async () => {      
      if(entityId){
        setLoading(true);      
        const data = await annotationService.getAnnotations(entityId);
        setLoading(false);
        setTags(data); // TODO: replace with actual data
      }
    }
    fetchAnnotations().catch(console.error);
  },[])


  return (
    <div className="tag-box">
      {(Loading) 
        ? <TagLoaderComponent></TagLoaderComponent>
        : (tags === null || tags.length === 0 ) ? <WarningTagComponent></WarningTagComponent>
        :
        tags.map(tag => (
          <TagComponent key={tag.key} tagKey={tag.key} name={tag.name} mimetype={tag.mimeType}  
          clientUrl={clientUrl!} annotationService={annotationService}></TagComponent>
      ))}
    </div>
  );
};

export { MainContainerComponent };
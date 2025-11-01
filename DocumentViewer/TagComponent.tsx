import * as React from 'react';
import { TagIconComponent } from './TagIconComponent'
import { IAnnotationService } from './services/IAnnotationService';

export interface ITagComponentProps {
    tagKey: string,
    name: string,
    mimetype: string | undefined,
    clientUrl: string
    annotationService: IAnnotationService
}

// https://<your-org>.crm.dynamics.com/api/data/v9.2/annotations(<annotation-id>)/documentbody 

const TagComponent: React.FC<ITagComponentProps> = ({ tagKey, name, mimetype,clientUrl, annotationService }) => {
    return (
    <a    
    className="tag-link"
    onClick={e => {
        e.preventDefault();
        e.stopPropagation()
        annotationService.downloadDocument(clientUrl, tagKey, name, mimetype).catch(console.error);

    }} // optional: prevent bubbling
  >
    <div className="tag">
        <TagIconComponent></TagIconComponent>
        {name}
    </div>
    </a>)
}

export { TagComponent }

//target="_blank"
//rel="noopener noreferrer"
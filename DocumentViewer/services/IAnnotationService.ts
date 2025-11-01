import { ITag } from "../models";

export interface IAnnotationService {
    getAnnotations(entityId: string): Promise<ITag[] | null>;
    downloadDocument(clientUrl: string, annotationId: string, 
        fileName: string, mimeType: string | undefined): Promise<void>;
}
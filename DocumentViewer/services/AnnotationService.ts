import { ITag } from "../models";
import { IAnnotationService } from "./IAnnotationService";

class AnnotationService implements IAnnotationService {
    constructor(private _webApi: ComponentFramework.WebApi) { }

    downloadDocument = async (clientUrl: string, annotationId: string, 
        fileName: string, mimeType: string | undefined): Promise<void> => {
        try {
        const fetchUrl = `${clientUrl}/api/data/v9.2/annotations(${annotationId})?$select=documentbody,mimetype`
        const response = await fetch(fetchUrl, {
            headers: {
                Accept: 'application/json',
                'OData-MaxVersion': '4.0',
                'OData-Version': '4.0',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch annotation: ${response.statusText}`);
        }

        const data = await response.json();
        const base64 = data.documentbody;
        const type = data.mimetype || mimeType || "application/octet-stream";

        // Convert Base64 → Blob
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type });

        // Trigger download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error("Error downloading document:", error);
    }
    }
    getAnnotations = async (entityId: string) => {
        const requestUrl = `?$filter=(_objectid_value eq ${entityId} and isdocument eq true)&$select=filename,mimetype,filesize,subject,annotationid`;

        return await this._webApi.retrieveMultipleRecords("annotation", requestUrl)
            .then((response) => {
                if (response.entities && response.entities.length > 0) {
                    console.log("Fetched annotations:", response.entities);

                    return response.entities.map((entity) => {
                        const annotationItem: ITag = {
                            key: entity.annotationid,
                            name: entity.filename,
                            mimeType: entity.mimetype
                        }
                        return annotationItem;
                    })
                }
                return null;
            }).catch((error) => {
                console.error("Error fetching annotations:", error);
                return null;
            });
    }
}

export { AnnotationService };
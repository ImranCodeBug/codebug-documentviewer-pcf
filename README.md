# codebug-documentviewer-pcf
[![Build Status](https://dev.azure.com/code-bug/code-bug/_apis/build/status%2FGitHub%2FImranCodeBug.codebug-documentviewer-pcf?branchName=main)](https://dev.azure.com/code-bug/code-bug/_build/latest?definitionId=27&branchName=main)

PowerApps Component Framework (PCF) control to list and download Note (annotation) attachments from Dataverse.

## Quick start
- Install dependencies:
  ```sh
  npm install
  ```
- Build the control:
  ```sh
  npm run build
  ```
- Run locally (dev host):
  ```sh
  npm start
  ```

## Project layout (key files)
- Control entry: [`DocumentViewer`](DocumentViewer/index.ts) — [DocumentViewer/index.ts](DocumentViewer/index.ts)  
- Main UI: [`MainContainerComponent`](DocumentViewer/MainContainerComponent.tsx) — [DocumentViewer/MainContainerComponent.tsx](DocumentViewer/MainContainerComponent.tsx)  
- Tag UI components: [DocumentViewer/TagComponent.tsx](DocumentViewer/TagComponent.tsx), [DocumentViewer/TagIconComponent.tsx](DocumentViewer/TagIconComponent.tsx), [DocumentViewer/TagLoaderComponent.tsx](DocumentViewer/TagLoaderComponent.tsx), [DocumentViewer/WarningTagComponent.tsx](DocumentViewer/WarningTagComponent.tsx)  
- Service & types: [`AnnotationService`](DocumentViewer/services/AnnotationService.ts), [`IAnnotationService`](DocumentViewer/services/IAnnotationService.ts) — [DocumentViewer/services/AnnotationService.ts](DocumentViewer/services/AnnotationService.ts) & [DocumentViewer/services/IAnnotationService.ts](DocumentViewer/services/IAnnotationService.ts)  
- Model: [`ITag`](DocumentViewer/models.ts) — [DocumentViewer/models.ts](DocumentViewer/models.ts)  
- PCF manifest: [DocumentViewer/ControlManifest.Input.xml](DocumentViewer/ControlManifest.Input.xml)  
- Build/config: [package.json](package.json), [tsconfig.json](tsconfig.json), [pcfconfig.json](pcfconfig.json)

## What it does
- Uses the WebAPI feature to query annotation (Note) records for an entity and renders them as clickable tags.
- Downloads attachment content (base64) via the Dataverse Web API and triggers a browser download (`AnnotationService`).

> **Note**
	this PCF is for model driven app only. inside the `index.ts` you will see that it is trying to fetch the client Url and the record id in which the component is being hosted. **Possibly** neither is supported action within a PCF

## Development notes
- React 16 is used (see [package.json](package.json)).
- Styles live in [DocumentViewer/styles.css](DocumentViewer/styles.css).
- Generated files are ignored (see .gitignore). Build artifacts are output to `out/controls` per [pcfconfig.json](pcfconfig.json).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
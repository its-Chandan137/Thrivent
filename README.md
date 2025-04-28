# Thrivent Project Documentation

## Overview
This document outlines the setup, configuration, and technical details of the Thrivent project, a React-based web application built with Vite and Material-UI (MUI), designed for deployment to Azure DevOps. It includes version information, a list of packages, setup instructions, and the recommended `.gitignore` file.

### Project Purpose
The Thrivent project is an educational portal that provides user authentication features, including login and password reset functionalities. It uses Material-UI for a modern user interface, Redux for state management, and React Router for navigation, with form validation handled by react-hook-form and Yup.

## Version Information
- **Node.js**: v22.11.0
  - Verified by running `node -v` in the terminal.
- **Vite**: 6.3.1
  - Found in `package.json` under `"devDependencies"`.
- **React**: 19.0.0
  - Found in `package.json` under `"dependencies"`.
- **@mui/material**: 7.0.2
  - Found in `package.json` under `"dependencies"`.
- **Other Packages** (versions from `package.json`):
  - **react-dom**: 19.0.0 - React DOM renderer.
  - **@emotion/react**: 11.14.0 - Emotion for MUI styling.
  - **@emotion/styled**: 11.14.0 - Styled components for MUI.
  - **@mui/icons-material**: 7.0.2 - MUI icon components.
  - **@hookform/resolvers**: 5.0.1 - Resolvers for react-hook-form.
  - **@reduxjs/toolkit**: 2.7.0 - Redux toolkit for state management.
  - **react-hook-form**: 7.56.1 - Form handling and validation.
  - **react-redux**: 9.2.0 - React bindings for Redux.
  - **react-router-dom**: 7.5.1 - Routing for React.
  - **yup**: 1.6.1 - Schema validation for forms.
  - **Dev Dependencies**:
    - **@eslint/js**: 9.22.0 - ESLint core.
    - **@types/react**: 19.0.10 - TypeScript definitions for React.
    - **@types/react-dom**: 19.0.4 - TypeScript definitions for React DOM.
    - **@vitejs/plugin-react-swc**: 3.8.0 - SWC plugin for Vite React.
    - **eslint**: 9.22.0 - Linting tool.
    - **eslint-plugin-react-hooks**: 5.2.0 - ESLint plugin for React hooks.
    - **eslint-plugin-react-refresh**: 0.4.19 - ESLint plugin for React Refresh.
    - **globals**: 16.0.0 - Global variables for ESLint.

## Packages Used
- **react**: Core library for building the user interface.
- **react-dom**: Renders React components in the DOM.
- **vite**: Build tool and development server for fast development and production builds.
- **@mui/material**: Material Design components for the UI.
- **@mui/icons-material**: Icon components for MUI.
- **@emotion/react**: Styling engine for MUI.
- **@emotion/styled**: Styled components support for MUI.
- **react-hook-form**: Manages form state and validation.
- **@hookform/resolvers**: Integrates Yup with react-hook-form.
- **yup**: Schema validation for forms.
- **@reduxjs/toolkit**: Simplified state management with Redux.
- **react-redux**: React bindings for Redux.
- **react-router-dom**: Handles routing in the application.
- **Dev Dependencies**:
  - **@eslint/js**, **eslint**, **eslint-plugin-react-hooks**, **eslint-plugin-react-refresh**: Tools for linting and enforcing React best practices.
  - **@types/react**, **@types/react-dom**: TypeScript type definitions.
  - **@vitejs/plugin-react-swc**: Enhances Vite with SWC for React.
  - **globals**: Provides global variable definitions for ESLint.

## .gitignore File
The following `.gitignore` file is recommended for the Thrivent project to exclude unnecessary files and directories from version control:





## Setup Instructions #############
1. **Prerequisites**:
   - Node.js v22.11.0 installed (check with `node -v`).
   - npm as the package manager (or yarn, if preferred).

2. **Installation**:
   - Clone the repository from Azure DevOps.
   - Run `npm install` to install dependencies.

3. **Development**:
   - Start the development server with `npm run dev`.
   - Access the app at `http://localhost:5173` (default Vite port).

4. **Build**:
   - Build the project for production with `npm run build`.
   - Output is generated in the `dist/` directory.

5. **Preview**:
   - Preview the production build with `npm run preview`.

6. **Linting**:
   - Run `npm run lint` to check for code quality issues.

7. **Deployment**:
   - Configure an Azure DevOps pipeline to deploy the `dist/` folder to Azure App Service.
   - Use a CI/CD pipeline (e.g., Azure Pipelines) for continuous deployment.
   - Sample `azure-pipelines.yml` for reference:

```yaml
trigger:
  - main

pool:
  vmImage: 'Ubuntu-latest'

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '22.11.0'
    displayName: 'Install Node.js'

  - script: npm install
    displayName: 'Install dependencies'

  - script: npm run build
    displayName: 'Build project'

  - task: ArchiveFiles@2
    inputs:
      rootFolderOrFile: 'dist'
      includeRootFolder: false
      archiveType: 'zip'
      archiveFile: '$(Build.ArtifactStagingDirectory)/dist.zip'
      replaceExistingArchive: true

  - task: PublishBuildArtifacts@1
    inputs:
      pathToPublish: '$(Build.ArtifactStagingDirectory)/dist.zip'
      artifactName: 'dist'
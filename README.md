# Micro Frontend Architecture

This project showcases a micro frontend architecture using Webpack 5's Module Federation. It includes a host application that dynamically loads chat and email applications. The setup runs locally and is not deployed on any domain.

## Setup and Installation
**Install dependencies for all applications:**

- **cd host && npm install && npm start**
- **cd ../chat && npm install && npm start**
- **cd ../email && npm install && npm start**

### Applications
- **Host App** (Port 3000): Main shell application that manages routing and shared components
- **Chat App** (Port 3001): Chat micro frontend
- **Email App** (Port 3002): Email micro frontend

### Dependencies

- React 19 (`react`, `react-dom`)  
- Webpack & Babel:  
  - `webpack`, `webpack-cli`, `webpack-dev-server`, `babel-loader`  
  - Install with:  
    - **`npm i -D @babel/core @babel/preset-react babel-loader html-webpack-plugin webpack`**  
    - **`npm i -D webpack-cli webpack-dev-server`**  
- Webpack 5 with Module Federation  
- Babel: `@babel/core`, `@babel/preset-react`  
- HTML Plugin: `html-webpack-plugin`  


### Key Features
- Dynamic loading of micro frontends
- Shared component library
- Centralized routing
- Consistent UI/UX across apps
- Scalable architecture
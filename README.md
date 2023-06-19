# Naska.AI-Demo
THREE.js and React demonstration created using in React-Three-Fiber

In order to run once in local machine:
* "cd" into project directory in Terminal
* run "npm run dev"
* if prompted with message "would you like to add the defaults to your package.json?": press "y" and Enter

**Project has all dependencies installed already, so it is ready to run in a local server. 
However, for documentation reasons, I will include them.**


Dependencies:
* cd into your project on the Terminal
* run "npm init -y" (package.json should be created)

* npm install (Setting up React environment):
  - react@18
  - react-dom@18.2
  - react-scripts@5.0
  
* inside package.json, replace content under scripts with 
  - "dev": "react-scripts start",
    "build": "react-scripts build"
   
* npm install (native THREE.js and React-Three-Fiber):
  - three@0.148
  - @react-three/fiber@8.9
  - @react-three/drei@9.50
  
* npm install (React UI Materials):
  - @mui/material @emotion/react @emotion/styled
  - @fontsource/roboto
  - @mui/icons-material 
 
* npm install (managing Global State):
  - zustand@4.3

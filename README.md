# Blog Progect 

## implemented with MERN Stack

## Frontend
- React.js
- MUI for forms and syled components (.jss)
- to start the project:
npm create vite@latest
cd Blog-MERN
npm install
npm run dev
- Provides basic user functionality (as per requirements): CRUD for posts, CRUD for comments, separation of authorized/non-authorized users actions

## Backend
- Node.js + Express.js
- used MVC architecture to structure the project
- database used MongoDB (via mongoose)
- to run:
(npm install -g nodemon) - optionally, used for dev
cd Blog-MERN/api
npm i
nodemon app.js / node start app.js

## Project requirements implemented:
- Basic Auth
- CRUD for posts & comments 
- Server side authorization with Passport local strategy
- noSQL databased used (MongoDB)
- error handling and responsiveness

## ToDO
- Implement search functionality for posts by title and content
- User profile page with basic information and post history
- Add Topics and search by Topics
- add passport OAuth authorization strategy with Google



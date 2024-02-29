# Blog Progect 

## implemented with MERN Stack

## Frontend
- React.js
- MUI library used for forms 
- used styled components (.jss)
- the project structure created with Vite (npm create vite@latest)
- to start the project:
git clone
cd Blog-MERN
npm install
npm run dev
- UI provides basic user functionality (as per requirements): CRUD for posts, CRUD for comments, separation of authorized/non-authorized users actions

## Backend
- Node.js + Express.js
- used MVC architecture to structure the project
- database used in the project is MongoDB (via mongoose)
- to run:
(npm install -g nodemon) - optionally, used for dev
cd Blog-MERN/api
npm i
nodemon app.js / node start app.js

## Project requirements implemented:
- Basic Auth
- full CRUD for posts & comments 
- Server side authorization with Passport local strategy
- noSQL databased used (MongoDB)
- error handling and screen responsiveness

## ToDO
- Implement search functionality for posts by title and content
- User profile page with basic information and post history
- Add Topics and search by Topics functionality, add images to posts
- add passport OAuth authorization strategy with Google



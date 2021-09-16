# A-Animal-Router-HW

- Submit assignment GitHub repo link in essay box. Remember to use .gitignore node_modules. Commit often
## Setup
### Create app base structure
- [x] Create new directory
- [x] 'npm init' to start new project
- [x] set app.js as "main" in package.json
- [x] 'touch app.js'
- [x] 'touch .gitignore' and add node_modules
- [x] Create github repo
- [x] init git repo and push to github
- [x] install express
- [x] install ejs
- [x] install morgan

### Start Server
- [x] require express
- [x] app = express()
- [x] get main route
  - [x] create path
  - [x] set views to directory views
  - [x] set views engine to ejs
  - [x] set main path to render index.ejs
## Assignment
### Assignment Data
``` javascript
let animalArray = [
{ id: 1, animalName: "dog" },
{ id: 2, animalName: "cat" },
{ id: 3, animalName: "hamster" },
];
```


### Assignment Tasks
- [x] create a animalRouter.js in the router folder

- [x] make sure to require it in app.js

- [ ] create a Get request to query all the animalArray and in the same request if query exists your program should able to query a specific animal using animalName

- [ ] create a Get request that uses params id to query to animal by ID

- [ ] create a Get request that uses params animalName to query to animal by animalName

- [ ] create a Post request to create a new animal and if there's duplicate in the array, you should let the user know that the animal already exists and please pick another animal. If the user sends in an empty object your program will tell the user "sorry no empty data"

- [ ] create a Put request to update the animalName using animalName params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

- [ ] create a Put request to update the animalName using ID params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

- [ ] create a delete request to delete the animalName using animalName params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. create a Put request to update the animalName using params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

- [ ] create a delete request to delete the animalName using ID params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. create a Put request to update the animalName using params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling
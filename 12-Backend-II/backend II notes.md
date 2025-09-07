## Backend II

### Routes folder
- Have all the routes path defined with particular request types along with controller.

### Controllers folder
- Mapped with routes.
- Has all the business logic to be performed on schema whenever hit on particular route path.

### Models folder
- To create a schema or structure of your data.

### Config folder
- Written same logic needed for your server like connection with DB.

### .env file
- Important and sensitive environment variables stored like API keys, connection string for mongoDB, any other credentials.

### Nodemon
- Runs the server automatically whenever any changes are made into the code.
- Install it with ```npm i nodemon``` and put below structure in package.json
```
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```
and run with command ```npm run dev```.

### Dotenv
- Library that imports environment variables from .env into your runtime environment i.e. process.env

### Note
- Either you can export with ```module.exports``` or ```exports.name_of_something_to_import```.
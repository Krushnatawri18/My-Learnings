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

### Relationships

1. One-to-one relationship
- One document related to one other document.
- eg.
```javascript
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // comments linked with document of post collection
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' // reference to Post model
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);
```

2. One-to-many relationship
- One document related to many other documents.
- eg.
```javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // likes is array of object ids
    // each object id in likes array represents single document of like collection
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
});

module.exports = mongoose.model('Post', postSchema);
```

3. Many-to-many relationships
- Many documents related to many other documents.
- eg.
```javascript
const userSchema = new mongoose.Schema({
  name: String,
  // user can have multiple liked posts
  likedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

const postSchema = new mongoose.Schema({
  title: String,
  // one post liked by many users
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

```

### Update operator

1. push

2. pull

### Populate

### Note
- Another way to crate a document, we can use use save() operation, which is asynchronous operations which needs await so that it will wait until saved document get resolved.
- Without await, it will work but may throw error while accessing savedComment._id as till now may be promise would not have resolved.
- eg.
``` javascript
// creates an instance of comment and returns whole comment document
    const comment = new Comment({
        post, user, body
    });

    // comment instance saved in db
    // await used for save method which is asynchronous
    const savedComment = await comment.save();

    // find the post and add new comment id into comments array for that particular post
    const updatedPost = await Post.findByIdAndUpdate({ _id: post }, 
        { $push: { comments: savedComment._id } },
        { new: true })
        .populate('comments')
        .exec();
```
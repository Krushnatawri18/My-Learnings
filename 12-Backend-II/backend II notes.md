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
```js
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
```js
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
            ref: 'Like'  // its similar to foreign key in sql
        }
    ],
});

module.exports = mongoose.model('Post', postSchema);
```

3. Many-to-many relationships
- Many documents related to many other documents.
- eg.
```js
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
``` js
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

### Mongoose Queries

1. ``Model.find()``
- Finds all documents matching the query.
- If no filter then returns all documents.
- eg.
``` js
const users = await User.find({}) // finding all users

const adults = await User.find({age: {$gt: 18}}) // finding all users whose age is greater than 18

const selected = await User.find({}, "name email") // finding all documents with name and email fields only
```

2. ``Model.findOne()``
- Returns the first matching document.
- eg.
```js
const user = await User.findOne({email: "email@gmail.com"}) // if not found returns null

const selected = await User.findOne({ email: "email@gmail.com" }, 'name').exec() // finding first document with filter and name field only
```

3. ``Model.findOneAndUpdate()`` (similar works for ``findOneAndDelete()``)
- Similar to ``findByIdAndUpdate()``, but you can give any filter not just id.
- eg.
```js
const updated = await User.findOneAndUpdate({name: 'Krishna'}, {age: 22}, {new: true})
```

### Note
- ```deleteOne()``` and ```updateOne()``` works similar as ```findOne()``` finds first document and performs particular operation.
- ```findOneAndRemove()``` is deprecated use ```findOneAndDelete()```.

4. ``Model.deleteMany()`` (similar works for ``updateMany()``)
- Deletes all documents matching the filter.
- eg.
```js
await User.deleteMany({age: {$lt: 18}}) // for less than
// retuns result object like 
{acknowledged: true, deletedCount: 3}
```

5. ``countDocuments()``
- Counts number of documents matching filter.
- eg.
```js
const count = await User.countDocuments({age: {$gte: 18}}) // for greater than or equal to 
```

6. ``sort(), limit(), skip()``
- Used with queries for pagination and sorting.
- eg.
```js
const oldest = await User.find().sort({_id: 1}).limit(5) // finds oldest 5 docs

const newest = await User.find().sort({createdAt/_id: -1}).limit(5) // finds recent 5 docs

const page2 = await User.find().skip(10).limit(10) // skip first 10 users (pagination)
```
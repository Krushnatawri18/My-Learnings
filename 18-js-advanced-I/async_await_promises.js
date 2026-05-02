// async

function func(fnc) {
    setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}

// passing callback to a function
func(function () {
    console.log('Hello')
});;

console.log('hi');

// earlier way of calling callback after function executed
function getProfile(username, cb) {
    console.log('Fetching profile info');
    setTimeout(() => {
        cb(username);
    }, 2000);
}

function getPosts(_id, cb) {
    console.log('Fetching posts');
    setTimeout(() => {
        cb({ _id: '1', posts: ['post1', 'post2', 'post3'] });
    }, 3000);
}

function getSavedPosts(posts, cb) {
    console.log('Fetching saved posts');
    setTimeout(() => {
        cb({ _id: '1', savedPosts: ['post1', 'post2'] });
    }, 3000);
}

// callback hell
getProfile("krishna", function (data) {
    getPosts(data._id, function (posts) {
        getSavedPosts(posts, function (savedPosts) {
            console.log(savedPosts);
        })
    });
});

// promises
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 10);
        if (number > 5) res("Number resolved with " + number);
        else rej("Number rejected with " + number);
    }, 1000);
});

pr
    .then(function (val) {
        // runs on resolve
        console.log(val);
    })
    .catch(function (val) {
        // runs on reject
        console.log(val);
    });

// async-await
console.log('with async-await')
async function call() {
    // runs on resolve
    try {
        let val = await pr;
        console.log(val);
    }
    // runs on reject
    catch (err) {
        console.log(err);
    }
}

call();
// this keyword scope

// 1. global scope
console.log(this); // prints value of window

// 2. function scope
function func() {
    let value = 3;
    console.log(this); // prints value of window
}
func();

// 3. method scope
const object = {
    name: 'naman',
    age: 24,
    sayNameWithFunc: function () {
        console.log(this); // prints whole value of object
    },
    // arrow function always takes value of this from its parent
    sayNameWithArrow: () => {
        console.log(this); // prints value of window as its parent is object at global scope
    },
    sayNameWithFunctionInMethod: function () {
        function func() {
            console.log(this); // prints value of window
        }
        func();
    },
    sayNameWithArrowInMethod: function () {
        let func = () => {
            console.log(this); // prints whole value of object as its parent is function which is at method scope 
        }
        func();
    }
}
object.sayNameWithFunc();
object.sayNameWithArrow();
object.sayNameWithFunctionInMethod();
object.sayNameWithArrowInMethod();

// 4. event handler scope
document.querySelector('h2').addEventListener('click', function () {
    console.log(this); // prints the value on which event handler is added <h3>this keyword</h3>
    this.style.color = "orange";
});

// 5. class
class Abcd {
    constructor() {
        // represents the blank object
        this.a = 12;
    }
}

let obj = new Abcd();

// manual binding - call, apply, bind

let obj1 = {
    name: 'Javascript',
    origin: 2005
};

function abcd(param1, param2) {
    console.log(this, param1, param2); // prints value of obj1
}

// calls function with specified object as this value
abcd.call(obj1, 24, 30);

// calls function with specified object as this value and elements of array as arguments
abcd.apply(obj1, [24, 30]);

// creates a new function with specificed object as this value and arguments passed to that funciton
let duplicateFunc = abcd.bind(obj1, 12, 26);
duplicateFunc();


let form = document.querySelector('form');
let username = document.querySelector('#name');
let bio = document.querySelector('#bio');
let profession = document.querySelector('#profession');
let url = document.querySelector('#url');
let removeButton = document.querySelector('.remove-user')

const userManager = {
    users: [],
    init: function () {
        // here this passed is context of whole object
        form.addEventListener('submit', this.submitForm.bind(this));
    },
    addUsers: function () {
        this.users.push({
            name: username.value,
            bio: bio.value,
            profession: profession.value,
            url: url.value,
        });
        this.showUsers();
    },
    removeUsers: function (index) {
        this.users.splice(index, 1);
        this.showUsers();
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUsers();

        form.reset();
    },
    showUsers: function () {
        const userCardsContainer = document.querySelector('.user-cards');
        userCardsContainer.innerHTML = ""; // clear old cards

        this.users.forEach((user, index) => {

            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const userAvatar = document.createElement('img');
            userAvatar.classList.add('user-avatar');
            userAvatar.src = user.url;
            userAvatar.alt = user.name;

            const userName = document.createElement('h3');
            userName.classList.add('user-name');
            userName.textContent = user.name;

            const userProfession = document.createElement('p');
            userProfession.classList.add('user-profession');
            userProfession.textContent = user.profession;

            const userBio = document.createElement('p');
            userBio.classList.add('user-bio');
            userBio.textContent = user.bio;

            const userLink = document.createElement('a');
            userLink.classList.add('user-url');
            userLink.href = user.url;
            userLink.target = "_blank";
            userLink.textContent = "Visit Profile";

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-user');
            removeButton.textContent = "Remove";

            userCard.appendChild(userAvatar);
            userCard.appendChild(userName);
            userCard.appendChild(userProfession);
            userCard.appendChild(userBio);
            userCard.appendChild(userLink);
            userCard.appendChild(removeButton);

            // here this is entire userManager object
            removeButton.addEventListener('click', this.removeUsers.bind(this, index));

            userCardsContainer.append(userCard);
        });
    }
};

userManager.init();
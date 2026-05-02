const usersDiv = document.querySelector(".users");
const refreshDiv = document.querySelector(".refresh-div");

function loadUsersWithPromise() {
    // in first then its returning the json data for next then
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => {
            // don't need to return as their is not then after that to receive it
            usersDiv.innerHTML = "";
            refreshDiv.innerHTML = "";
            data.results.forEach(user => {
                const card = document.createElement("div");
                card.className =
                    "bg-white p-4 rounded-xl shadow-md border border-gray-300 w-56 text-center flex flex-col items-center";

                const img = document.createElement("img");
                img.src = user.picture.medium;
                img.className = "w-16 h-16 rounded-full mb-3";

                const name = document.createElement("h4");
                name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
                name.className = "font-semibold text-sm text-gray-800 text-center";

                const email = document.createElement("p");
                email.textContent = user.email;
                email.className =
                    "text-xs text-gray-600 break-all text-center mt-1";

                card.append(img, name, email);
                usersDiv.appendChild(card);
            });

            const button = document.createElement("button");
            button.textContent = "Refresh";
            button.className =
                "refresh-btn bg-green-500 px-6 py-2 rounded-lg text-white border border-green-700 hover:bg-green-600 transition";

            button.addEventListener("click", loadUsers);
            refreshDiv.appendChild(button);
        })
        .catch((err) => {
            console.log(err);
        });
}

async function loadUsersWithAsyncAwait() {
    try {
        const rawData = await fetch("https://randomuser.me/api/?results=5");
        const data = await rawData.json();
        // const newData = await rawData.json(); // can't do this again
        console.log(rawData.ok);
        usersDiv.innerHTML = "";
        refreshDiv.innerHTML = "";
        data.results.forEach(user => {
            const card = document.createElement("div");
            card.className =
                "bg-white p-4 rounded-xl shadow-md border border-gray-300 w-56 text-center flex flex-col items-center";

            const img = document.createElement("img");
            img.src = user.picture.medium;
            img.className = "w-16 h-16 rounded-full mb-3";

            const name = document.createElement("h4");
            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            name.className = "font-semibold text-sm text-gray-800 text-center";

            const email = document.createElement("p");
            email.textContent = user.email;
            email.className =
                "text-xs text-gray-600 break-all text-center mt-1";

            card.append(img, name, email);
            usersDiv.appendChild(card);
        });

        const button = document.createElement("button");
        button.textContent = "Refresh";
        button.className =
            "refresh-btn bg-green-500 px-6 py-2 rounded-lg text-white border border-green-700 hover:bg-green-600 transition";

        button.addEventListener("click", loadUsersWithAsyncAwait);
        refreshDiv.appendChild(button);
    } catch (error) {
        console.log(error);
    }

}

async function loadUsersWithAsyncAwaitWithAxios() {
    try {
        const data = await axios("https://randomuser.me/api/?results=5");
        usersDiv.innerHTML = "";
        refreshDiv.innerHTML = "";
        data.data.results.forEach(user => {
            const card = document.createElement("div");
            card.className =
                "bg-white p-4 rounded-xl shadow-md border border-gray-300 w-56 text-center flex flex-col items-center";

            const img = document.createElement("img");
            img.src = user.picture.medium;
            img.className = "w-16 h-16 rounded-full mb-3";

            const name = document.createElement("h4");
            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            name.className = "font-semibold text-sm text-gray-800 text-center";

            const email = document.createElement("p");
            email.textContent = user.email;
            email.className =
                "text-xs text-gray-600 break-all text-center mt-1";

            card.append(img, name, email);
            usersDiv.appendChild(card);
        });

        const button = document.createElement("button");
        button.textContent = "Refresh";
        button.className =
            "refresh-btn bg-green-500 px-6 py-2 rounded-lg text-white border border-green-700 hover:bg-green-600 transition";

        button.addEventListener("click", loadUsersWithAsyncAwaitWithAxios);
        refreshDiv.appendChild(button);
    } catch (error) {
        console.log(error);
    }

}

// loadUsersWithPromise();
// loadUsersWithAsyncAwait();
loadUsersWithAsyncAwaitWithAxios();

// Form submission with fetch
const form = document.getElementById('myForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  message.textContent = 'Submitting...';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });

    // best practice for error handling
    if (!res.ok) {
      throw new Error('Failed to submit');
    }

    const data = await res.json();
    message.textContent = 'Success';
    form.reset();
  } catch (err) {
    message.textContent = 'Error';
  }
});
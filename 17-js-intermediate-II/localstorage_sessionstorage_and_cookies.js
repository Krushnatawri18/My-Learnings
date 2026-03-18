// localStorage

// setting an item - stores value as string only
localStorage.setItem('name', 'aminesh');

// will set item as string like this "arjun, bheem, nakul"
localStorage.setItem('friends', ['arjun', 'bheem', 'nakul']);

// will convert our array into string and will store it
localStorage.setItem('friends', JSON.stringify(['arjun', 'bheem', 'nakul']));

const friends = localStorage.getItem('friends');
console.log(friends); // '["arjun","bheem","nakul"]' as a string

// to get value in actual form 
const realFriendsValue = JSON.parse(localStorage.getItem('friends'));
console.log(realFriendsValue, typeof realFriendsValue); // ['arjun', 'bheem', 'nakul']

// will set item as string like this "[object Object]"
localStorage.setItem('siblings', JSON.stringify({ one: 'parth', two: 'karna' }));

const siblings = localStorage.getItem('siblings');
console.log(siblings); // '{"one":"parth","two":"karna"}'

// to get value in actual form 
const realSiblingsValue = JSON.parse(localStorage.getItem('siblings'));
console.log(realSiblingsValue); // {one: 'parth', two: 'karna'}

// fetching the item
const value = localStorage.getItem('name');
console.log(value);

// removing the item
localStorage.removeItem('name');

// updating the item
localStorage.setItem('name', 'avishka');

// clearing
// localStorage.clear();

// sessionStorage
sessionStorage.setItem('name', 'harshita');


// cookie
document.cookie = "email=demo@mail.com";
document.cookie = "age=26"; // survives till the browser isn't closed

// setting expiration of cookie
const d = new Date();
d.setTime(d.getTime() + (24 * 60 * 60 * 1000));

// document.cookie = "theme=light; expires=" + d.toUTCString() + "; path=/;";


// theme preference
const btn = document.querySelector('button');

function applyTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
}

// Determine initial theme: user preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

// Listen for system theme changes (only if user hasn't chosen)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!savedTheme) applyTheme(e.matches ? 'dark' : 'light');
});

// Toggle button
btn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});


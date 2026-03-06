setTimeout(function () {
    console.log('Hello')
}, 2000);

setInterval(function (){
    console.log('Hello again and again')
}, 3000);

let count = 10;
let interval = setInterval(() => {
    if (count >= 1) {
        count--;
        console.log(count);
    }
    else {
        console.log(interval);
        clearInterval(interval);
    }
}, 1000);

let seconds = 10;
let downloadingPercent = 0;
let progress = document.querySelector('.progress-bar');
let percent = document.querySelector('#percent');
let h2 = document.querySelector('h2');

setInterval(function (){
    if (downloadingPercent < 100) {
        downloadingPercent++;
        progress.style.width = `${downloadingPercent}%`;
        percent.textContent = `${downloadingPercent}%`
    }
    else {
        h2.textContent = 'Downloaded.';
    }
}, (seconds * 1000) / 100);

let alertBox = document.querySelector('.alert-box');
// asynchronous task, js schedules callback to be run after 3s but clearTimeout clears it before 3s as its synchronous code
let time = setTimeout(() => {
    alertBox.style.display = "none";    
}, 3000);

clearTimeout(time);
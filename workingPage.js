//DOM Elements
const time = document.getElementById('times'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById ('name'),
    focus = document.getElementById('focus');

//Array(s)
// const backgrounds = {
//     [],
//     [],
//     [],
//     []
// };

//This is a test merge

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent =localStorage.getItem('focus');
    }
};

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter key is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
    }
};

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
};


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
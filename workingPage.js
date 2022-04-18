// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent =localStorage.getItem('focus');
    }
    getFocus();
}

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
}

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
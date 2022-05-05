//DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    userName = document.getElementById ('name'),
    focus = document.getElementById('focus'),
    todaysDate = document.getElementById('date');
 


//Options
const showAmPm = true;

//show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    //set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";
    
    //12hr format
    hour = hour % 12 || 12;
    
    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

function showDate() {
  let currentDate = new Date();

  let month = currentDate.getMonth() +1;
  let date = currentDate.getDate();
  let year = currentDate.getFullYear();
  
  const monthName = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November","December"];

todaysDate.innerHTML = `${monthName[currentDate.getMonth()]} ${date}, ${year}`
};

//add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

winterImgs = {
  morning:
    'https://media.istockphoto.com/photos/winter-daybreak-scenery-of-harunire-tree-at-toyokoro-town-in-hokkaido-picture-id1327439171?b=1&k=20&m=1327439171&s=170667a&w=0&h=0A0O456Fzna0TN-k38I7lruxugmNfB3UZycgD4rEKos=',
  afternoon:
    "https://images.unsplash.com/photo-1581196607303-95c00f31c676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60",
  evening:
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60",
};

summerImgs = {
  morning:
    "https://images.unsplash.com/photo-1562553086-f6f7cbd4b4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHN1bW1lciUyMG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60",
  afternoon:
    "https://images.unsplash.com/photo-1583393818248-f678d14fb16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyJTIwZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=60",
  evening:
    "https://images.unsplash.com/photo-1501418611786-e29f9929fe03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHN1bW1lciUyMG5pZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=60",
};

fallImgs = {
  morning:
    "https://images.unsplash.com/photo-1542360663-8f40838b8d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhbGwlMjBtb3JuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=60",
  afternoon:
    "https://images.unsplash.com/photo-1638065848287-7e9d21b986c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFsbCUyMG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60",
  evening:
    "https://images.unsplash.com/photo-1509001333319-944a48ef262b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhbGwlMjBuaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60",
};

springImgs = {
  morning:
    "https://images.unsplash.com/photo-1521624213010-9fb0f30dcd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60",
  afternoon:
    "https://images.unsplash.com/photo-1526344966-89049886b28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3ByaW5nJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60",
  evening:
    "https://images.unsplash.com/photo-1554256273-6ff4f08eb11e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60",
}
  // document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60")';
// set background and greeting
function showBackground() {
  let today = new Date(),
    month = today.getMonth() + 1;
    hour = today.getHours();
    if (hour >=0 && hour < 12) {
      if (month === 12 || month === 1 || month === 2){
        document.body.style.backgroundImage = `url('${winterImgs.morning}')`;
        document.body.style.color ="white";
      } else if (month === 3 || month === 4 || month === 5){
        document.body.style.backgroundImage = `url('${springImgs.morning}')`;
        document.body.style.color ="black";
      }else if (month === 6 || month === 7 || month === 8){
        document.body.style.backgroundImage = `url('${summerImgs.morning}')`;
        document.body.style.color ="black";
      }else if (month === 9 || month === 10 || month === 11){
        document.body.style.backgroundImage = `url('${fallImgs.morning}')`;
        document.body.style.color ="white";
      }
      greeting.textContent = "Good Morning,";
    }if (hour >= 12 && hour < 19){
      if (month === 12 || month === 1 || month === 2){
        document.body.style.backgroundImage = `url('${winterImgs.afternoon}')`;
        document.body.style.color ="white";
      }else if(month === 3 || month === 4 || month === 5){
        document.body.style.backgroundImage = `url('${springImgs.afternoon}')`;
        document.body.style.color ="purple";
      }else if(month === 6 || month === 7|| month === 8){
        document.body.style.backgroundImage = `url('${summerImgs.afternoon}')`;
        document.body.style.color ="yellow";
      }else if (month === 9 || month === 10 || month === 11){
        document.body.style.backgroundImage = `url('${fallImgs.afternoon}')`;
        document.body.style.color ="white";
      }
      greeting.textContent = "Good Afternoon,";
    }if (hour >= 19 && 23 >= hour){
      if (month === 12 || month === 1 || month === 2){
        document.body.style.backgroundImage = `url('${winterImgs.evening}')`;
        document.body.style.color ="white";
      }else if(month === 3 || month === 4 || month === 5){
        document.body.style.backgroundImage = `url('${springImgs.evening}')`;
        document.body.style.color ="white";
      }else if(month === 6 || month === 7|| month === 8){
        document.body.style.backgroundImage = `url('${summerImgs.evening}')`;
        document.body.style.color ="white";
      }else if (month === 9 || month === 10 || month === 11){
        document.body.style.backgroundImage = `url('${fallImgs.evening}')`;
        document.body.style.color ="white";
      }
      greeting.textContent = "Good Evening,";
}
};

function getName() {
  if (localStorage.getItem('name') === null) {
    userName.textContent ='[Enter Name]';
  } else {
  userName.textContent = localStorage.getItem('name');
}
};

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            userName.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
};

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
}
};

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
showBackground();
showDate();
getName();
getFocus();
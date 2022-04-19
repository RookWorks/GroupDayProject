//Options
const showAmPm = true;
//show time
function showTime(){
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();
//set AM or PM
const amPm = hour >= 12 ? "PM" : "AM";
//12hr format
hour = hour % 12 || 12;
//output time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;
  setTimeout(showTime, 1000);
}

//add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set background and greeting
function setBgGreet() {
  let month = date.getMonth();
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    //season morning backgrounds
    if ((month = "December" || "January" || "February")) {
      document.body.style.backgroundImage =
        "winter morning pic from winterarray";
    } else if ((month = "March" || "April" || "May")) {
      document.body.style.backgroundImage =
        "spring morning pic from springarray";
    } else if ((month = "June" || "July" || "August")) {
      document.body.style.backgroundImage =
        "summer morning pic from summerarray";
    } else {
      document.body.style.backgroundImage = "fall morning pic from fallarray";
    }
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon season backgrounds
    if ((month = "December" || "January"|| "February")) {
      document.body.style.backgroundImage =
        "winter afternoon pic from winterarray";
    } else if ((month = "March" || "April" || "May")) {
      document.body.style.backgroundImage =
        "spring afternoon pic from springarray";
    } else if ((month = "June"|| "July" || "August")) {
      document.body.style.backgroundImage =
        "summer afternoon pic from summerarray";
    } else {
      document.body.style.backgroundImage = "fall afternoon pic from fallarray";
    }
    greeting.textContent = "Good Afternoon!";
  } else {
    //evening season backgrouds
    if ((month = "December" || "January" || "February")) {
      document.body.style.backgroundImage = winterImgs.evening;
    } else if ((month = "March"|| "April"||, "May")) {
      document.body.style.backgroundImage =
        "spring evening pic from springarray";
    } else if ((month = "June"|| "July"|| "August")) {
      document.body.style.backgroundImage =
        "summer evening pic from summerarray";
    } else {
      document.body.style.backgroundImage = "fall evening pic from fallarray";
    }
    greeting.textContent = "Good Evening!";
    //if background is light, delete line below
    //document.body.style.color = "white";
  }
}

setBgGreet();

winterImgs = {
  morning:
    "https://media.istockphoto.com/photos/winter-daybreak-scenery-of-harunire-tree-at-toyokoro-town-in-hokkaido-picture-id1327439171?b=1&k=20&m=1327439171&s=170667a&w=0&h=0A0O456Fzna0TN-k38I7lruxugmNfB3UZycgD4rEKos=",
  afternoon:
    "https://images.unsplash.com/photo-1616731721469-fb3d2c5abb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  evening:
    "https://images.unsplash.com/photo-1581196607303-95c00f31c676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
};

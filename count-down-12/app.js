const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const endDate = new Date(2021,6,1,2,7,59);


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


giveaway.innerHTML = `giveaway ends on ${weekdays[endDate.getDay()]} ${endDate.getDate()} ${months[endDate.getMonth()]} ${endDate.getFullYear()}, ${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()}`
function format(item){
  if(item<10){
    return `0${item}`;
  }
  return `${item}`;
}

function getRemainigTime(){
  const currentDate = new Date();
  var timeLeft = endDate-currentDate;
  timeLeft = Math.floor(timeLeft/1000);
  var secs = timeLeft%60;
  timeLeft = Math.floor(timeLeft/60);
  var mins = timeLeft%60;
  timeLeft = Math.floor(timeLeft/60);
  var hours = timeLeft%24;
  timeLeft = Math.floor(timeLeft/24);
  var days = timeLeft;
  items.forEach(function(item){
    if(item.classList.contains('days')){
      item.innerHTML = format(days);
    } else if(item.classList.contains('hours')){
      item.innerHTML = format(hours);
    } else if(item.classList.contains('mins')){
      item.innerHTML = format(mins);
    } else{
      item.innerHTML = format(secs);
    }
  })
  if(timeLeft<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway expired !!!</h4>`  }
}

let countdown = setInterval(getRemainigTime,1000);
getRemainigTime();


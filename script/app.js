let launchDate = new Date("Jul 26, 2024 00:00:00").getTime();

let dDay = document.querySelector(".div1");
let hrs = document.querySelector(".div2");
let mins = document.querySelector(".div3");
let sec = document.querySelector(".div4");
let display = document.querySelector("#displayDate");
display.innerHTML = new Date("Jul 26, 2024");

function myfunction() {
  let now = new Date().getTime();
  let launch = launchDate - now;

  let days = Math.floor(launch / (1000 * 60 * 60 * 24));
  let hours = Math.floor((launch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((launch % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((launch % (1000 * 60)) / 1000);

  dDay.innerHTML = days + ":";
  hrs.innerHTML = hours + ":";
  mins.innerHTML = minutes + ":";
  sec.innerHTML = seconds;
  launch--;
}

setInterval(myfunction, 1000);


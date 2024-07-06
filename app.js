const day = document.querySelector('.day');
const date = document.querySelector('.date');
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();

day.innerHTML = days[now.getDay()];
date.innerHTML = now.toLocaleTimeString();
const deg = 6;
const hr = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");

setInterval(() => {
  let day = new Date();
  // 当前时间
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
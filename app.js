const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const ampm = document.querySelector('#ampm');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let newampm = "AM";

  if (h > 12) {
    h = h - 12;
    newampm = "PM";
  };

  hours.innerText = String(h).padStart(2, 0);
  minutes.innerText = String(m).padStart(2, 0);
  seconds.innerText = String(s).padStart(2, 0);
  ampm.innerText = String(newampm).padStart(2, 0);

  setTimeout(() => {
    updateClock()
  }, 1000)
}

updateClock();
function updateclock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").innerText = `${hour}:${min}:${sec}`;
}

updateclock();
setInterval(updateclock, 1000);

let tsecond = 0;
let remsecend = 0;
let timeinterval = null;
let timerunning = false;

const countdisplay = document.querySelector("#counting");
const minutesin = document.querySelector("#min");
const secondin = document.querySelector("#sec");

function formattime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updatedisplay() {
  countdisplay.innerText = formattime(remsecend);
}

function stick() {
  if (remsecend <= 0) {
    clearInterval(timeinterval);
    countdisplay.textContent = "00:00";
    countdisplay.classList.add("finished");
    return;
  }
  remsecend--;
  updatedisplay();
}

document.getElementById("strtimer").addEventListener("click", () => {
  if (timerunning) return;

  if (remsecend === 0) {
    const mins = parseInt(minutesin.value) || 0;
    const secs = parseInt(secondin.value) || 0;
    tsecond = mins * 60 + secs;
    remsecend = tsecond;
    if (remsecend <= 0) return;
  }
  countdisplay.classList.remove("finished");
  timerunning = true;
  timeinterval = setInterval(stick, 1000);
});

document.getElementById("pausetimer").addEventListener("click", () => {
  if (!timerunning) return;
  clearInterval(timeinterval);
  timerunning = false;
});

document.getElementById("resettimer").addEventListener("click", () => {
  clearInterval(timeinterval);
  timerunning = false;
  remsecend = 0;
  minutesin.value = "";
  secondin.value = "";
  countdisplay.textContent = "00:00";
  countdisplay.classList.remove("finished");
});

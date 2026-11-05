const clock = document.querySelector("#clock");

function updateClock() {
  if (!clock) {
    return;
  }

  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23"
  }).format(now);

  clock.textContent = time;
  clock.dateTime = time;
}

updateClock();
setInterval(updateClock, 1000);

window.onload = function () {
  let sec = 0;
  let mili = 0;
  let interval;
  let lapCount = 0;

  const addsec = document.querySelector(".sec");
  const addmili = document.querySelector(".mili");
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");
  const lap = document.querySelector(".lap");
  const laps = document.querySelector(".laps");

  start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 1);
  };

  stop.onclick = function () {
    clearInterval(interval);
  };

  reset.onclick = function () {
    clearInterval(interval);
    sec = 0;
    mili = 0;
    lapCount = 0;
    addsec.innerHTML = "00";
    addmili.innerHTML = "00";
    laps.innerHTML = "";
  };

  lap.onclick = function () {
    lapCount++;
    const lapItem = document.createElement("li");
    const timestamp = new Date().toLocaleTimeString();
    lapItem.textContent = `Lap ${lapCount} - ${addsec.textContent} : ${addmili.textContent} (at ${timestamp})`;
    laps.appendChild(lapItem);
  };

  function startTimer() {
    mili++;
    addmili.innerHTML = mili < 10 ? "0" + mili : mili;

    if (mili > 999) {
      sec++;
      addsec.innerHTML = sec < 10 ? "0" + sec : sec;
      mili = 0;
      addmili.innerHTML = "00";
    }
  }

  const themeBtn = document.getElementById("theme-btn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Toggle Theme';
    } else {
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Toggle Theme';
    }
  });
};

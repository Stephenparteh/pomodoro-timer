let pomodoroBtn = document.getElementById("pomo");
let shortBreak = document.getElementById("short");
let longBreak = document.getElementById("long");
let time = document.getElementById("mainTime");
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
// let date = new Date();
let minutes = 25;
let seconds = 0;
let interval;

const display = () => {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  time.innerHTML = `${formattedMinutes}: ${formattedSeconds}`;
};

const startTimer = () => {
  interval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      alert("Pomodoro finished");
    }
    display();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

const play = () => {
  playBtn.addEventListener("click", (e) => {
    startTimer();
  });
};

const pause = () => {
  pauseBtn.addEventListener("click", (e) => {
    stopTimer();
    // alert("Pause");
  });
};

const shortBreakk = () => {
  minutes = 5;
  seconds = 0;
  display();
};

const longBreakk = () => {
  minutes = 15;
  seconds = 0;
  display();
};

const pomodoro = () => {
  minutes = 25;
  seconds = 0;
  display();
};

const reset = () => {
  minutes = 25;
  seconds = 0;
  display();
};

resetBtn.addEventListener("click", (e) => {
  clearInterval(interval);
  reset();
});

shortBreak.addEventListener("click", (e) => {
  clearInterval(interval);
  shortBreakk();
});
longBreak.addEventListener("click", (e) => {
  clearInterval(interval);
  longBreakk();
});
pomodoroBtn.addEventListener("click", (e) => {
  clearInterval(interval);
  pomodoro();
});

play();
pause();
// startTimer();

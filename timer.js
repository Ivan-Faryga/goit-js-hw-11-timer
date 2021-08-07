class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;
  }
  getRefs() {
    const timerContainer = document.querySelector(this.selector);
    const days = timerContainer.querySelector('[data-value="days"]');
    const hours = timerContainer.querySelector('[data-value="hours"]');
    const mins = timerContainer.querySelector('[data-value="mins"]');
    const secs = timerContainer.querySelector('[data-value="secs"]');

    return { days, hours, mins, secs };
  }
  updateTimer({ days, hours, mins, secs }) {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    // days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
    // hours.textContent = Math.floor(
    //   (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    // mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    // secs.textContent = Math.floor((time % (1000 * 60)) / 1000);

    const daysLeft = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log(time);
    const hoursLeft = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minsLeft = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secsLeft = Math.floor((time % (1000 * 60)) / 1000);

    // days.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    days.textContent = daysLeft.toString().padStart(2, "0");
    hours.textContent = hoursLeft.toString().padStart(2, "0");
    mins.textContent = minsLeft.toString().padStart(2, "0");
    secs.textContent = secsLeft.toString().padStart(2, "0");

    if (time < 1000) {
      this.clearTimer();
    }
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }
  clearTimer() {
    clearInterval(this.timerId);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Aug 9, 2021 12:38"),
});

timer.startTimer();
timer2.startTimer();
console.log(timer);

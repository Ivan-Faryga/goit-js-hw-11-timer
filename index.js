// ======================= объект рефов ==========================

// const refs = {
//   dateInput: document.getElementById("target-date"),
//   timeInput: document.getElementById("target-time"),
//   startBtn: document.querySelector(".start-countdown"),
//   daysCounter: document.querySelector('[data-value="days"]'),
//   hoursCounter: document.querySelector('[data-value="hours"]'),
//   minsCounter: document.querySelector('[data-value="mins"]'),
//   secsCounter: document.querySelector('[data-value="secs"]'),
// };

// //================ слушатели событий ==============================

// refs.dateInput.addEventListener("input", onDateInput);
// refs.timeInput.addEventListener("input", onTimeInput);
// refs.startBtn.addEventListener("click", startTimer);

// // ================ ссылки на табло с цифрами ====================

// const daysCounterValue = refs.daysCounter.textContent;
// const hoursCounterValue = refs.daysCounter.textContent;
// const minsCounterValue = refs.daysCounter.textContent;
// const secsCounterValue = refs.daysCounter.textContent;

// //===============================================
// let timerId = null;
// let time = null;

// function onDateInput(e) {
//   console.log(refs.dateInput.value);
// }

// function onTimeInput(e) {
//   console.log(refs.timeInput.value);
// }

// function startTimer() {
//   // =================== не понятно как перенести время с инпута в таймер
//   const targetDate = new Date(refs.dateInput.value + refs.timeInput.value);
//   console.log(targetDate);
// }

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);

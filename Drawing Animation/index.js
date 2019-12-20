const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI; //取得圓周長
circle.setAttribute('stroke-dasharray', perimeter); //設定外框圈圈

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
      perimeter * timeRemaining / duration - perimeter
    ) //設定外框距離
  },
  onComplete() {
    console.log('Timer is completed');
  }
});

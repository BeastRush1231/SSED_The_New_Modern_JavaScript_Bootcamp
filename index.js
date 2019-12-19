const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI; //取得圓周長
circle.setAttribute('stroke-dasharray', perimeter); //設定外框圈圈

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset) //設定外框距離
    currentOffset = currentOffset - 1;	//每次減少offset距離
  },
  onComplete() {
    console.log('Timer is completed');
  }
});

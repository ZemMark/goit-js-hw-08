import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// console.log(_);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOLOCALPROGRESS_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data);
    localStorage.setItem(VIDEOLOCALPROGRESS_KEY, data.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(VIDEOLOCALPROGRESS_KEY) || 0);

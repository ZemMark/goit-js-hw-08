const iframe = document.querySelector('iframe');
const player = new Video().Player(iframe);

player.on('play', onPlay);
function onPlay() {
  console.log('playing the video');
}

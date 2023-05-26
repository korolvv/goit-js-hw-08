import Player from '@vimeo/player';
// import _ from 'lodash.throttle';

// const player = new Player('handstick', {});
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};


iframePlayer.on('timeupdate', _.throttle(onPlay, 1000));


const currentSeconds = localStorage.getItem("videoplayer-current-time");


iframePlayer.setCurrentTime(currentSeconds);
var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme'),
    jumplink7 = document.getElementById('jump7'),
    jumplink5 = document.getElementById('jump5');
    

jumplink7.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 35;
    myvideo.play();
}, false);

// only in to demonstrate video
playbutton.addEventListener("click", function () {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}, false);

jumplink5.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.play();
    myvideo.pause();
    myvideo.currentTime = 60;
    myvideo.play();
}, false);
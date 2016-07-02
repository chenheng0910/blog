~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();

new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            switch (n) {
                case 0:
                    slide.id = "page5";
                    break;
                case 1:
                    slide.id = "page1";
                    break;
                case 2:
                    slide.id = "page2";
                    break;
                case 3:
                    slide.id = "page3";
                    break;
                case 4:
                    slide.id = "page4";
                    break;
                case 5:
                    slide.id = "page5";
                    break;
                case 6:
                    slide.id = "page1";
                    break;
            }
            return;
        }
        slide.id = null;
    })
}

/*music play*/
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false)
}, 1000);
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music move";
        return;
    }
    musicAudio.pause();
    music.className="music";
},false);
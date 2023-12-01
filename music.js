//Catalogue play music button
let HFODmusic = document.getElementById("HFODmusic");
let GSmusic = document.getElementById("GSmusic");
let MXmusic = document.getElementById("MXmusic");
let playicon1 = document.getElementById("play-icon1");
let playicon2 = document.getElementById("play-icon2");
let playicon3 = document.getElementById("play-icon3");

playicon1.onclick = function(){
    if (HFODmusic.paused){
        HFODmusic.play();
        playicon1.src = "Images/pause.png"
    }else{
        HFODmusic.pause();
        playicon1.src = "Images/play.png"
    }
}

playicon2.onclick = function(){
    if (GSmusic.paused){
        GSmusic.play();
        playicon2.src = "Images/pause.png"
    }else{
        GSmusic.pause();
        playicon2.src = "Images/play.png"
    }
}

playicon3.onclick = function(){
    if (MXmusic.paused){
        MXmusic.play();
        playicon3.src = "Images/pause.png"
    }else{
        MXmusic.pause();
        playicon3.src = "Images/play.png"
    }
}

// reveal elements when scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show'); //shows element when meant to be visible
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
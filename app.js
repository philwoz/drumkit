const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hithat = document.getElementById("hithat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")
const animation = document.getElementById("animation")

document.addEventListener("keydown", (event) => {
    if(event.key == "b"){
        boom.play()
        animation.style
    } else if(event.key == "c"){
        clap.play()
    } else if(event.key == "h"){
        hithat.play()
    } else if(event.key == "k"){
        kick.play()
    } else if(event.key == "o" ){
        openhat.play()
    } else if(event.key == "r" ){
        ride.play()
    } else if(event.key == "s" ){
        snare.play()
    } else if(event.key == "t"){
        tink.play()
    } else if(event.key == "m"){
        tom.play()
    }
   
})



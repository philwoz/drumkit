const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hithat = document.getElementById("hithat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")
const boomCard = document.getElementById("boom-cards")
const clapCard = document.getElementById("clap-cards")
const hithatCard = document.getElementById("hithat-cards")
const kickCard = document.getElementById("kick-cards")
const openhatCard = document.getElementById("openhat-cards")
const rideCard = document.getElementById("ride-cards")
const snareCard = document.getElementById("snare-cards")
const tinkCard = document.getElementById("tink-cards")
const tomCard = document.getElementById("tom-cards")


document.addEventListener("keydown", (event) => {
    if(event.key == "b"){
        boom.play()
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

tomCard.addEventListener("click", () => {

    tom.play()
}
) 
tinkCard.addEventListener("click", () => {

    tink.play()
}
) 
snareCard.addEventListener("click", () => {

    snare.play()
}
) 
rideCard.addEventListener("click", () => {

    ride.play()
}
) 
openhatCard.addEventListener("click", () => {

    openhat.play()
}
) 

kickCard.addEventListener("click", () => {

    kick.play()
}
) 

hithatCard.addEventListener("click", () => {

    hithat.play()
}
) 

boomCard.addEventListener("click", () => {

    boom.play()
}
) 

clapCard.addEventListener("click", () => {

    clap.play()
}
) 



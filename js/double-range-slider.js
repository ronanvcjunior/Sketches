window.onload = function(){
    fillColor()
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function fillColor(){
    percent1 = Math.round(parseFloat((sliderOne.value / sliderMaxValue) * 100));
    percent2 = Math.round(parseFloat((sliderTwo.value / sliderMaxValue) * 100));

    if(percent1 > percent2){
        let mudança = percent1
        percent1 = percent2
        percent2 = mudança
    }

    displayValOne.textContent = (percent1)
    displayValTwo.textContent = (percent2)
    
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`
}
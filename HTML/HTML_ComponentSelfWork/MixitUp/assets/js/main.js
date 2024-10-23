
const tabs = document.querySelectorAll('.tab');
const mixitUpBoxSliders = document.querySelectorAll('.mixitUpBoxSlider');

document.addEventListener('DOMContentLoaded', function(){
    mixitUpBoxSliders.forEach((slide, index) =>{
        if(index != 0){
            slide.style.display= 'none';
        }
    });
});


const tabs = document.querySelectorAll('.tab');
const allTab = document.querySelector('.all');
const allTabSlider = document.querySelector('.allTabeSlider');
const mixitUpBoxSliders = document.querySelectorAll('.mixitUpBoxSlider');

// document.addEventListener('DOMContentLoaded', function(){
//     mixitUpBoxSliders.forEach((slide, index) =>{
//         if(index != 0){
//             slide.style.display= 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.allTabSlider').textContent = mixitUpBoxSliders;
});

function allTabSliderShow(){
    allTab.addEventListener('click',function(){
        mixitUpBoxSliders.forEach(slider => {
            // Set display to 'flex' to show all sliders
            slider.style.display = 'flex';
        });
    });
}
allTabSliderShow();

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',function(){
        mixitUpBoxSliders.forEach((slider)=>{
            slider.style.display = 'none';
        });
        mixitUpBoxSliders[index].style.display = 'flex';
    });
});




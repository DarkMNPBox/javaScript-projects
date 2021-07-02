const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`;
});

let counter = 0;

nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
});

prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
});

function carousel(){
    console.log(slides.length);
    nextBtn.style.display ="none";
    prevBtn.style.display = "none";
    if(counter<slides.length-1){
        nextBtn.style.display ="block";
    }
    if(counter>0){
        prevBtn.style.display ="block";
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
    
}
prevBtn.style.display = "none";
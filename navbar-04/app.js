// classList - shows/gets all classes
    // contains - checks classList for specific class
    // add - add class
    // remove - remove class
    // toggle - toggles class


const navToggle  = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // 1)
    // if (links.classList.contains('show-links')){
    //     links.classList.remove('show-links');   
    // } else{
    //     links.classList.add('show-links');
    // }

    // 2)
    links.classList.toggle('show-links');
});
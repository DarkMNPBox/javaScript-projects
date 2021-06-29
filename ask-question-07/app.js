// 1. traversing the dom
// 2. using selectors inside the element

// 1) not allow to close while other open
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//     })
// })

// 2) allow to close other while opening
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item != question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});
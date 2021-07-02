
// 1) my way
// const btns = document.querySelectorAll('.tab-btn');

// function showContent(btn,content){
//     btns.forEach(function(bt){
//         bt.classList.remove('active');
//         const contents = document.getElementById(bt.dataset.id);
//         contents.classList.remove('active');
//         console.log(contents.classList);
//     })
//     btn.classList.add('active');
//     content.classList.add('active');
//     // console.log(content.classList);
// }

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const id = e.currentTarget.dataset.id;
//         const content = document.getElementById(id);
//         showContent(e.currentTarget,content);
//     })
// })

// 2) Reference way
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            const content = document.getElementById(btn.dataset.id);
            content.classList.remove('active');
        })
        e.target.classList.add('active');
        document.getElementById(id).classList.add('active');
    }
})


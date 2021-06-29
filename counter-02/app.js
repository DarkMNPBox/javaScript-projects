// 1) 

// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");
// const value = document.getElementById('value');
// let count = 0;

// function checkState(){
//     if (count == 1){
//         value.style.backgroundColor = 'green';
//     } else if(count == -1){
//         value.style.backgroundColor = 'red';
//     } else if(count == 0){
//         value.style.backgroundColor = 'grey';
//     }
// }

// increase.addEventListener('click',function(){
//     count ++;
//     checkState();
//     value.innerHTML = count;
// });

// decrease.addEventListener('click',function(){
//     count --;
//     checkState();
//     value.innerHTML = count;
// });

// reset.addEventListener('click',function(){
//     count = 0;
//     checkState();
//     value.innerHTML = count;
// });

// 2)

let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

function checkState(){
    if (count == 1){
        value.style.backgroundColor = 'green';
    } else if(count == -1){
        value.style.backgroundColor = 'red';
    } else if(count == 0){
        value.style.backgroundColor = 'grey';
    }
}

function updateState(btn){
    switch(btn){
        case 'increase':    count++;
                            break;
        case 'decrease' : count--;
                          break;
        case 'reset' : count = 0;
                       break;   
    }
    value.textContent = count;
    checkState();
}

btns.forEach(function(element){
    element.addEventListener('click',function(e){
        const btn = e.currentTarget.classList[1];
        updateState(btn);
    });
});




























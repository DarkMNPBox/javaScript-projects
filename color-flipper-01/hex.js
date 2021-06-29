const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color  =document.querySelector(".color");

btn.addEventListener('click',function(){
    const randomColor = getRandomColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
})

function getRandomColor(){
    var elements = ['#',];
    for (let i=0;i<6;i++){
        var random = Math.floor(Math.random()*hex.length);
        elements.push(hex[random]);
    }
    return elements.join('')
}
// const welcomeBox = document.getElementById('box')
const btn = document.getElementById('btn')
const nav = document.getElementById('nav')
// const text = "I'm a product designer, i enjoy identifying problems and solving problems with design by working with creative and passionate people to make users and customers happy.";

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
    nav.classList.toggle('active')
})
// let index = 0;

// function welcomeMessage() {
//     welcomeBox.innerText = text.slice
//     (0, index);
//     index++;
//     console.log(index)
//     if (index > text.length) {
//         index = 0
//     }
// }
// setInterval( welcomeMessage, 300);

// carousel
const imgs = document.getElementById("imgs");

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function run(){
    idx++;
    if (idx > img.length - 1){
        idx = 0
    }
        imgs.style.transform = `translateX(${-idx * 800}px)`
    
}
setInterval(run,8000)

// carousel
const phoneImgs = document.getElementById("imgs2");

const phoneImg = document.querySelectorAll('#imgs2 img');

let idxt = 0;

function run2(){
    idxt++;
    if (idxt > img.length - 1){
        idxt = 0
    }
        phoneImgs.style.transform = `translateX(${-idxt * 300}px)`
    
}
setInterval(run2,2000)
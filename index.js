var par = document.querySelector('.par');
var al = document.querySelector('.al');
var lax = document.querySelector('.lax');
var para = document.querySelector('.para');

function paralax(element , speed , direction){
    switch (direction) {
        case 'up':
            element.style.transform = `translateY(-${window.scrollY * (speed/100)}px)`
            break;
        case 'down':
            element.style.transform = `translateY(${window.scrollY * (speed/100)}px)`
            break;
    }
}
function fadeIn(element , position){
    var screenHeight = window.innerHeight;
    screenHeightCalculation = screenHeight * (position/100);
    var elementPositionFromTop = element.getBoundingClientRect().top;
    if (elementPositionFromTop < screenHeightCalculation){
        element.classList.add('fadein');
    }
    else{
        element.classList.remove('fadein');
    }
}
window.addEventListener("scroll",function(){
    paralax(par,20,'down');
    paralax(al,5,'up');
    paralax(lax,15,'down');
    fadeIn(para , 60);
})
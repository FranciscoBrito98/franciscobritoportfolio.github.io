const btnRight = document.querySelector('.button-arrow.-right'); //variavel
const btnLeft = document.querySelector('.button-arrow.-left'); //variavel
const elements = document.querySelector('.elements');  //variavel


let pixels = 0;
let min = 1000;
let max = 0;

btnRight.addEventListener('click', function() {
    if(max == 0){

    }else{
        pixels = pixels - 100;
        elements.style =  `transform: translateX(${pixels}px)`;
        min = min + 100;
        max = max - 100;
    }

})

btnLeft.addEventListener('click', function() {
    if(min == 0){

    }else{
        pixels = pixels + 100;
        elements.style = `transform: translateX(${pixels}px)`;
        min = min - 100;
        max = max + 100;
    }
})
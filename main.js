let buffer = "0"
let runningTotal = 0;
const screen = document.querySelector(".screen");

function buttonClick(value) {
   if (isNaN(parseInt(value))) {
    handleSymbol(value);
   }else{
         handleNumber(value);
   }
   rerender();
}

function handleNumber (number){
    if (buffer==="0"){
        buffer = number;
} else {
        buffer+= number;
    }
}

function handleMaths(value) {
    if (buffer === 0)
    // do nothing
    return;

    const intBuffer = parseInt(intBuffer);
if (runningTotal === 0){
    runningTotal = intBuffer;
} else{
    flushOperation(intBuffer);
}
    
}

function handleSymbol (symbol){
    switch (symbol) {
    case "C":
    buffer = "0" 
    break;

    case "=":
    console.log("equals");
    break;

    case "←":
    if (buffer.length === 1) {
        buffer = "0";
    }else {
        buffer = buffer.substring(0, buffer.length - 1);
    }
    break;

    case "÷":
    case "-":
    case "+":
    case "×":
       handleMaths(symbol);
        break;
 }
}


function init() {
    document.querySelector(".calc-buttons")
    document.addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
    });
}

function rerender(){
    screen.innerText = buffer;
}

init();u 
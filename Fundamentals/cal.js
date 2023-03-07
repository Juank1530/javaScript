const numberButton = document.getElementsByName('data-number');
const operationButton = document.getElementsByName('data-operation');
const deleteButton = document.getElementsByName('data-delete')[0];
const equalButton = document.getElementsByName('data-equal')[0];
var result = document.getElementById('result');
var currentOpe = '';
var previousOpe = '';
var Operation = undefined;


numberButton.forEach(function(button){
    button.addEventListener('click' ,function(){
        addNumber(button.innerText);
    })
})

operationButton.forEach(function(button){
    button.addEventListener('click' ,function(){
        selectOperation(button.innerText);
    })
})

equalButton.addEventListener('click', function(){
    calculate();
    refreshDisplay();
})

deleteButton.addEventListener('click', function(){
    clearInterval();
    refreshDisplay();
})


/**********Functions**********/

function OperationSelect(op){
    if( currentOpe === '') return;
    if (condition != ''){
        calculate();
    }
    Operation = op.toString();
    previousOpe = currentOpe;
    currentOpe = '';
}

function calculate(){
}

function addNumber(num){
    currentOpe = currentOpe.toString() + num.toString();
    refreshDisplay();
}

function refreshDisplay(){
    result.value = currentOpe;
}

function clear(){
    currentOpe = '';
    previousOpe = '';
    Operation = undefined;
}

clear();
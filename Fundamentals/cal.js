const numberButton = document.getElementsByName('data-number');
const operationButton = document.getElementsByName('data-operation');
const deleteButton = document.getElementsByName('data-delete')[0];
const equalButton = document.getElementsByName('data-equal')[0];
var result = document.getElementById('result');
var currentOpe = '';
var previousOpe = '';
var operation = undefined;


numberButton.forEach(function(button){
    button.addEventListener('click' ,function(){
        addNumber(button.innerText);
        //alert(button.innerText);
    })
});

operationButton.forEach(function(button){
    button.addEventListener('click' ,function(){
        selectOperation(button.innerText);
        //alert(button.innerText);
    })
});

equalButton.addEventListener('click', function(){
    calculate();
    refreshDisplay();
});

deleteButton.addEventListener('click', function(){
    clear();
    refreshDisplay();
});


/**********Functions**********/

function selectOperation(op){
    if( currentOpe === '') return;
    if (previousOpe !== ''){
        calculate();
    }
    operation = op.toString();
    previousOpe = currentOpe;
    currentOpe = '';
}

function calculate(){
    var cal;
    const last = parseFloat(previousOpe);
    const current = parseFloat(currentOpe);
    if (isNaN(last) || isNaN(current)) return;
    switch (operation) {
        case '+':
            cal = last + current;
            break;
        case '-':
            cal = last - current;
            break;
        case '*':
            cal = last * current;
            break;
        case '/':
            if(current == 0){
                alert("You can't divide on 0");
                clear();
            }else{
                cal = last / current;
            }
            break;
        default:
            return;
    }
    currentOpe = cal;
    operation = undefined;
    previousOpe = '';
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
    operation = undefined;
}

clear();
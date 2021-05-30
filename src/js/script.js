window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcAreaWrapper = document.querySelector('.calc-area'),
        calcArea = document.querySelector('.calc-area-input'),
        calcPrev = document.querySelector('.calc-area-prev'),
        numbersBtn = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('plus-minus'),
        plus = document.getElementById('plus'),
        minus = document.getElementById('minus'),
        comma = document.getElementById('comma'),
        equals = document.getElementById('equals'),
        operator = document.querySelectorAll('.button-operator');

    let result = 0,
        inputValue = '',
        counter = 1;

    calcArea.addEventListener('focus', () => {
        if (calcArea.value == 0) {
            calcArea.value = '';
        }
    });

    calcArea.addEventListener('input', () => {
        validateInputValue();
    });

    const addNumInput = (e) => {
        const target = e.target;
        const btnValue = target.value;

        if (counter === 0) {
            calcPrev.innerHTML = '';
            calcArea.value = btnValue;
        } else {
            if (inputValue == '') {
                calcArea.value = btnValue;
                inputValue = calcArea.value;
            } else {
                calcArea.value += btnValue;
                inputValue = calcArea.value;
            }
        }
    }

    // const newInputValue = calcArea.value.replace(/[^\d\.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' );       
    //     calcArea.value = newInputValue;

    // const validateInputValue = () => {
    //     inputValue = calcArea.value.match(/\d+\.?/g);
    //     calcArea.value = inputValue;
    //     console.log(inputValue);
    // }
        
    let i = 0;
    while (i < numbersBtn.length) {
        numbersBtn[i].addEventListener('click', addNumInput);
        i++;
    }

    const addDataCalcPrev = (e) => {
        const target = e.target;

        inputValue = calcArea.value;

        calcArea.value = '';
        
        let prevInner = calcPrev.innerHTML;

        if (prevInner === '') {
            calcPrev.innerHTML = inputValue + ' ' + target.innerHTML + ' ';
        } else {
            calcPrev.innerHTML = prevInner + inputValue + ' ' + target.innerHTML + ' ';
        }
        calculate(target);
    }

    const calculate = (target) => {
        
        switch (target.innerHTML) {
            case '+':
                result += +inputValue;
                calcArea.value = result;
                inputValue = '';
                break;
            case '-':
                result -= +inputValue;
                calcArea.value = result;
                inputValue = '';
                break;
            case '*':
                result *= +inputValue;
                calcArea.value = result;
                inputValue = '';
                break;
            case '/':
                result /= +inputValue;
                calcArea.value = result;
                inputValue = '';
                break;
            case '%':
                result = result / 100 * +inputValue;
                calcArea.value = result;
                inputValue = '';
                break;
            default:
                alert( "target" );
        }  
    }
    
    for (i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', addDataCalcPrev);
    }

    plusMinus.addEventListener('click', () => {
        if (calcArea.value != -calcArea.value) {
            calcArea.value = -calcArea.value;
            // console.log(typeof calcArea.value); //string
        }
    });

    equals.addEventListener('click', () => {

        if (counter === 0) {
            calcPrev.innerHTML = calcPrev.innerHTML;
            calcArea.value = calcArea.value;
        } else {
            calcPrev.innerHTML = calcPrev.innerHTML + ' ' + calcArea.value;
            calcArea.value = result + +calcArea.value;
            counter = 0;
        }
    });

});
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcAreaWrapper = document.querySelector('.calc-area'),
        calcArea = document.querySelector('.calc-area-input'),
        calcPrev = document.querySelector('.calc-area-prev'),
        numbersBtn = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('plus-minus'),
        plus = document.getElementById('plus'),
        minus = document.getElementById('minus'),
        comma = document.getElementById('comma');

    let result = 0;
    let inputValue = '';
        
    const addNumInput = (e) => {
        const target = e.target;
        const btnValue = target.value;

        if (inputValue == '') {
            calcArea.value = btnValue;
            inputValue = calcArea.value;
        } else {
            calcArea.value += btnValue;
            inputValue = calcArea.value;
        }
    }
        
    let i = 0;
    while (i < numbersBtn.length) {
        numbersBtn[i].addEventListener('click', addNumInput);
        i++;
    }

    const addDataCalcPrev = () => {
        inputValue = calcArea.value;

        calcArea.value = '';
        
        let PrevInner = calcPrev.innerHTML;

        if (PrevInner === '') {
            calcPrev.innerHTML = inputValue + ' + ';
        } else {
            calcPrev.innerHTML = PrevInner + inputValue + ' + ';
        }

        addition(inputValue);
    }

    const addition = () => {
        result += +inputValue;
        calcArea.value = result;
        inputValue = '';
        console.log(inputValue);
    }
    
    plus.addEventListener('click', addDataCalcPrev);

});
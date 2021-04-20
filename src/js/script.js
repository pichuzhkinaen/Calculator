window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcArea = document.querySelector('.calc-area'),
        numbers = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('#plus-minus'),
        plus = document.getElementById('#plus'),
        minus = document.getElementById('#minus');

    const addNumInput = (e) => {
        const target = e.target;
        const buttonValue = target.value;
        console.log(buttonValue);

        if (calcArea.value > 0) {
            calcArea.value += "" + buttonValue;
            if (calcArea.length === 5) {
                return false;
            }
        } else {
            calcArea.value = buttonValue;
        }
        calcArea.oninput = function() {
            result.innerHTML = calcArea.value;
        };

    };

    let i = 0;
    while (i < numbers.length) {
        numbers[i].addEventListener('click', addNumInput);
        i++;
    }

});
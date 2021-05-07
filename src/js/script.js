window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcArea = document.querySelector('.calc-area'),
        numbers = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('#plus-minus'),
        plus = document.getElementById('#plus'),
        minus = document.getElementById('#minus');

    calcArea.addEventListener('focus', () => {
        if (calcArea.value == 0) {
            calcArea.value = '';
        }
    });

    calcArea.addEventListener('input', () => {
        const newInputValue = calcArea.value.replace(/[^\d\.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' );
        calcArea.value = newInputValue;
        console.log(newInputValue);
    });

    //заполнение поля инпут при клике на кнопки с цифрами
    const addNumInput = (e) => {
        const target = e.target;
        const btnValue = target.value;
        let arrInput = [];
        
        if (calcArea.value != 0 && calcArea.value.length < 15) {
            arrInput = calcArea.value += "" + btnValue;
        } else if (calcArea.value == 0) {
            calcArea.value = btnValue;
        } else {
            return false;
        }
    };
  
    let i = 0;
    while (i < numbers.length) {
        numbers[i].addEventListener('click', addNumInput);
        i++;
    }

});
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcAreaWrapper = document.querySelector('.calc-area'),
        calcArea = document.querySelector('.calc-area-input'),
        numbers = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('plus-minus'),
        plus = document.getElementById('plus'),
        minus = document.getElementById('minus'),
        comma = document.getElementById('comma');

    let dataInput = [];

    // console.log(typeof calcArea.value); //string

    calcArea.addEventListener('focus', () => {
        if (calcArea.value == 0) {
            calcArea.value = '';
        }
    });
    
    calcArea.addEventListener('input', (e) => {
        // const newInputValue = calcArea.value.match(/(\d+[.,]\d+)|(\d+)/g);
        // console.log(/(\d+[.,]\d+)|(\d+)/g.test(newInputValue));
        // console.log(newInputValue);
        

        // if (calcAreaPrev.innerHTML.includes('+')) {
            // calcArea.value = '';
            // let eData = [e.data];
            // eData.push(e.data);
            // console.log(eData);
            // calcArea.value += '' + eData;
        // }

        const newInputValue = calcArea.value.replace(/[^\d\.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' );       
        calcArea.value = newInputValue;
    });

    plus.addEventListener('click', () => {
        createCalcPrev();
        let calcPrev = document.querySelector('.calc-area-prev');
        
        if (!calcPrev.innerHTML == '') {
            calcPrev.innerHTML = calcPrev.innerHTML + calcArea.value + '+';
            dataInput.push(calcArea.value);
            let dataInputSum = 0;

            for (let i = 0; i < dataInput.length; i++) {
                dataInput[i] = Number(dataInput[i]);
                dataInputSum += dataInput[i];
                calcPrev.innerHTML = dataInputSum + ' +';
                calcArea.value = '';
            }
        } else {
            calcPrev.innerHTML = calcArea.value + ' +';
            dataInput.push(calcArea.value);
            calcArea.value = '';
        }
        // calcArea.value = calcArea.value + dataInput;
        // calcPrev.innerHTML = calcArea.value;
    });

    // comma.addEventListener('click', () => {
    //     if (!calcArea.value.includes(',')) {
    //         calcArea.value += ',';
    //         console.log(comma);

    //     }
    // });

    plusMinus.addEventListener('click', () => {
        if (calcArea.value != -calcArea.value) {
            calcArea.value = -calcArea.value;
            console.log(typeof calcArea.value); //string
        } else {
            calcArea.value = calcArea.value;
        }
    });

    dot.addEventListener('click', () => {
        if (!calcArea.value.includes('.')) {
            calcArea.value += dot.innerHTML;
        }
    });
    

    //установка фокуса на input при клике на кнопки клавиатуры
    document.addEventListener('keydown', (e) => {
        calcArea.focus();
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

    function createCalcPrev() {
        let calcPrev = document.createElement('span');
        calcAreaWrapper.append(calcPrev);
        calcPrev.classList.add('calc-area-prev');
    }
});
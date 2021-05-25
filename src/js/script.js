window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const calcAreaWrapper = document.querySelector('.calc-area'),
        calcArea = document.querySelector('.calc-area-input'),
        calcPrev = document.querySelector('.calc-area-prev'),
        numbers = document.querySelectorAll('.numbers-button'),
        plusMinus = document.getElementById('plus-minus'),
        plus = document.getElementById('plus'),
        minus = document.getElementById('minus'),
        comma = document.getElementById('comma');

    let dataInput = [];

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

    // plus.addEventListener('click', () => {
    //     let sumInputValue = 0;
    //     let calcAreaValue = calcArea.value;
    //     calcArea.value = '';
    //     dataInput.push(calcAreaValue);

    //     console.log(dataInput);

    //     calcPrev.innerHTML = calcPrev.innerHTML + calcAreaValue + ' + ';

    //     for (let i = 0; i < dataInput.length; i++) {

    //         sumInputValue = +sumInputValue + +dataInput[i];

    //     }
    //     console.log(sumInputValue);
    //     calcArea.value = sumInputValue;       

    // });

    plus.addEventListener('click', () => {
        const valuePrev = calcPrev.innerHTML;
        const calcAreaValue = calcArea.value;

        addNumPrev(valuePrev, calcAreaValue);

        // let sumInputValue = 0;
        // let calcAreaValue = calcArea.value;
        // calcArea.value = '';
        // dataInput.push(calcAreaValue);

        // console.log(dataInput);

        // // calcPrev.innerHTML = calcPrev.innerHTML + calcAreaValue + ' + ';

        // for (let i = 0; i < dataInput.length; i++) {

        //     sumInputValue = +sumInputValue + +dataInput[i];

        // }
        // calcArea.value = sumInputValue;       
        
    });
    
    const addNumPrev = (valuePrev, calcAreaValue) => {
        valuePrev = valuePrev + calcAreaValue + ' + ';
        console.log(valuePrev);
        calcPrev.innerHTML = valuePrev;
    }

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
        // let calcAreaValue = new Number(calcArea.value);
        // console.log(typeof calcArea.value);
        
        const target = e.target;
        const btnValue = target.value;
        let arrInput = [];
        
        if (calcArea.value != 0 && calcArea.value.length < 15) {
            arrInput = calcArea.value += "" + btnValue;
        } else if (calcArea.value == 0) {
            calcArea.value = new Number(btnValue);
            // console.log(typeof calcArea.value);
            
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
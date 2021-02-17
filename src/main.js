import { diffDates, diffToHtml } from './datecalc.js';
import { formatError } from './utils.js';
import { timer, startTimer, endTimer } from './timer.js';
import { programSelection } from './select.js';
import './style.css';

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');
const timerInput = document.getElementById('time');
const buttonStart = document.getElementById('buttonStart');
const buttonStop = document.getElementById('buttonStop');
const timerShow = document.getElementById('timeLeft');
const sound = document.getElementById('audio');


dateCalcForm.addEventListener('submit', handleCalcDates);
buttonStart.addEventListener('click', startTimer);
buttonStop.addEventListener('click', endTimer);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff); 
    } else 
        dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
}


let allButton = document.querySelectorAll('.tablinks');
allButton.forEach(element => {
    element.addEventListener('click', programSelection);
});

export { timerShow, timerInput, sound};




import { formatError } from './utils.js';
import { timerShow, timerInput, sound } from './main.js';

let timeout;

function timer() {
    let timeSecond = parseInt(timerInput.value) * 60;
    timeout = setInterval(function() {
        if(timeSecond <= 0) {
            timerShow.innerHTML = formatError('Время закончилось');
            sound.play(); 
            clearInterval(timeout);
        } else {
            let timeLeft = 0 - timeSecond;
            timerShow.innerHTML = `${timeLeft}`;
        } 
        --timeSecond;
    }, 1000)
}

function startTimer(event) {
    timerShow.innerHTML = '';
    event.preventDefault();  
    if (timerInput.value) {
        timer(timerInput.value);
    } else {
        timerShow.innerHTML = formatError('Необходимо ввести число');
    }
}

function endTimer(event) {
    timerShow.innerHTML = formatError('Вы сбросили таймер');
    clearInterval(timeout);
    event.preventDefault();
}

export { timer, startTimer, endTimer };
const timer = document.querySelector('.timer');

let secs: number = 0, mins: number = 0, hours: number = 0;

let interval: number;

let isPausedFlag: boolean = false;
let isStopedFlag: boolean = false;
let isStartedFlag: boolean = false;

function settingInterval () {
    interval = setInterval(() => {
        secs += 1;

        if (secs === 60) {
            mins += 1;
            secs = 0;
        }

        if (mins === 60) {
            hours += 1;
            mins = 0;
        }
        
        // setting value
        timer!.textContent = `${hours}:${mins}:${secs}`;
    }, 1000);
}

const initButton = document.querySelector('.init')?.addEventListener("click", settingInterval);

const pauseButton = document.querySelector('.pause')?.addEventListener("click", () => {
    if (!isPausedFlag) {
        clearInterval(interval);

        isPausedFlag = !isPausedFlag;
    } else {
        settingInterval();

        isPausedFlag = !isPausedFlag;
    }
});

const resetButton = document.querySelector('.reset')?.addEventListener("click", () => {
    clearInterval(interval);
    
    secs = 0, mins = 0, hours = 0;

    timer!.textContent = `${hours}:${mins}:${secs}`;
});
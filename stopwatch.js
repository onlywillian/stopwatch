var _a, _b, _c;
var timer = document.querySelector('.timer');
var secs = 0, mins = 0, hours = 0;
var interval;
var isPausedFlag = false;
var isStopedFlag = false;
var isStartedFlag = false;
function settingInterval() {
    interval = setInterval(function () {
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
        timer.textContent = "".concat(hours, ":").concat(mins, ":").concat(secs);
    }, 1000);
}
var initButton = (_a = document.querySelector('.init')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", settingInterval);
var pauseButton = (_b = document.querySelector('.pause')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    if (!isPausedFlag) {
        clearInterval(interval);
        isPausedFlag = !isPausedFlag;
    }
    else {
        settingInterval();
        isPausedFlag = !isPausedFlag;
    }
});
var resetButton = (_c = document.querySelector('.reset')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    clearInterval(interval);
    secs = 0, mins = 0, hours = 0;
    timer.textContent = "".concat(hours, ":").concat(mins, ":").concat(secs);
});

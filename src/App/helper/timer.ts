import {error} from "./setter";

class Timer {
    constructor(private intervalId: number) {
    }

    startTimer(startTime: number) {
        try {
            const originalSetItem = localStorage.setItem;

            localStorage.setItem = function() {
                const event = new Event('tick');
                document.dispatchEvent(event);

                // @ts-ignore
                originalSetItem.apply(this, arguments);
            }
            this.intervalId = setInterval(function () {
                const secsDiff = Math.floor((new Date().getTime() - startTime) / 1000).toString();
                localStorage.setItem('passedTime', secsDiff);
            }, 1000);
        } catch (err) {
            error.setError = 'localStorage not available in your browser';
        }
    }

    resetTimer() {
        const startTime = new Date().getTime();
        this.clearCurrentInterval();
        this.startTimer(startTime);
    }

    clearCurrentInterval() {
        clearInterval(this.intervalId);
    }
}

export const timer = new Timer(0);
class Timer {
    constructor(private intervalId: number) {
    }

    startTimer(startTime: number) {
        this.intervalId = setInterval(function () {
            const secsDiff = Math.floor((new Date().getTime() - startTime) / 1000).toString();
            localStorage.setItem('passedTime', secsDiff);
        }, 1000);
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
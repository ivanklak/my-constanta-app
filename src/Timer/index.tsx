import React, {FC, useEffect, useState} from "react";

import {timer} from "../App/helper/timer";
import {error} from "../App/helper/setter";

import styles from './styles.module.css';

const Time: FC = () => {

    const [time, setTime] = useState(0);

    const clickHandler = () => {
        timer.resetTimer();
    };

    const storageHandler = function () {
        setTime(Number(localStorage.getItem('passedTime')));
    };

    useEffect(() => {
        document.addEventListener('tick', storageHandler, false);

        return () => document.removeEventListener('tick', storageHandler);
    }, [])

    return (
        <div className={styles.timerContainer}>
            <div className={styles.timer}>
                <span>{time}</span>
                <div className={styles.resetButton}>
                    <button onClick={clickHandler}>Reset Time</button>
                </div>
                <div className={styles.error}>{error.setError}</div>
            </div>
        </div>
    )
}

export default Time;
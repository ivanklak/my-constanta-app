import React, {FC, useEffect, useState} from "react";

import {timer} from "../App/helper/timer";
import {error} from "../App/helper/setter";

import styles from './styles.module.css';

const Time: FC = () => {
    const [time, setTime] = useState(0);
    const [notice, setNotice] = useState('');

    const clickHandler = () => {
        timer.resetTimer();
    };

    const copyHandler = () => {
        navigator.clipboard.writeText(String(time));
        setNotice('Time copied to clipboard');
        setTimeout(() => setNotice(''), 1000);
    }

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
                <span id="time">{time}</span>
                <div className={styles.timerButtonsField}>
                    <button onClick={clickHandler}>Reset Time</button>
                    <button onClick={copyHandler}>Copy time</button>
                </div>
                {notice && <div className={styles.notice}>{notice}</div>}
                <div className={styles.error}>{error.setError}</div>
            </div>
        </div>
    )
}

export default Time;
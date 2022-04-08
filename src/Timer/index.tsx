import React, {FC} from "react";

import {timer} from "../App/helper/timer";

import styles from './styles.module.css';

const Time: FC = () => {

    const clickHandler = () => {
        timer.resetTimer();
    };

    return (
        <div className={styles.timerContainer}>
            <div className={styles.timer}>
                <span>counter</span>
                <div className={styles.resetButton}>
                    <button onClick={clickHandler}>Reset Time</button>
                </div>
            </div>
        </div>
    )
}

export default Time;
import React, {FC} from 'react';

import InfoBlock from "./components/InfoBlock";
import {texts} from "../assets/texts";

import styles from './styles.module.css';

const infoBlocks = [
    {title: 'About me', text: texts.aboutMe},
    {title: 'Experience', text: texts.experience},
    {title: 'My strength', text: texts.strength}
];

const Info: FC = () => (
    <div className={styles.info}>
        <div className={styles.infoContainer}>
            <div className={styles.infoTitle}>
                <h1>Hi! I`m Ivan :)</h1>
            </div>
            <div className={styles.infoText}>
                {infoBlocks.map(item => (
                    <InfoBlock title={item.title} key={item.title} text={item.text}/>
                ))}
            </div>
        </div>
    </div>
)

export default Info;
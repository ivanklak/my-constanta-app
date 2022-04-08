import React, {FC} from "react";

import styles from "./styles.module.css";

interface IInfoBlockProps {
    title: string,
    text: string
}

const InfoBlock: FC<IInfoBlockProps> = ({title, text}) => {

    return (
        <div className={styles.infoBlock}>
            <div className={styles.blockTitle}>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default InfoBlock;
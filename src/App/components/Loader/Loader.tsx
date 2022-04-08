import React, {FC} from 'react';

import styles from './styles.module.css';

const Loader: FC = () => (
    <div className={styles.loader}>
        <div className={styles.loaderContainer}>
            <h2>Loading...</h2>
        </div>
    </div>
)

export default Loader;



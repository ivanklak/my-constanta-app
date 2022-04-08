import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getCoordinates} from "./selectors";

import styles from './styles.module.css';

const Maps: FC = () => {
    const {coordinates} = useSelector(getCoordinates);

    return (
        <div className={styles.mapContainer}>
            {coordinates}
        </div>

    )
}

export default Maps;
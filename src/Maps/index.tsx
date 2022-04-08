import React, {FC} from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {useSelector} from "react-redux";
import {getCoordinates} from "./selectors";

import styles from './styles.module.css';

const Maps: FC = () => {
    const {coordinates} = useSelector(getCoordinates);

    return (
        <div className={styles.mapContainer}>
            <YMaps>
                <Map width={"50vw"}
                     height={"80vh"}
                     defaultState={{center: coordinates, zoom: 10, behaviors: ['default', 'scrollZoom'],}}
                >
                    <Placemark
                        defaultGeometry={coordinates}
                        options={{
                            preset: 'islands#pinkStretchyIcon',
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
}

export default Maps;
import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";

import Routes from "./routes";
import Navbar from "./components/Navbar";
import {TimeActions} from "../Timer/actions";
import {timer} from "./helper/timer";

const App: FC = () => {
    const dispatch = useDispatch();

    const startTime = new Date().getTime();

    useEffect(() => {
        timer.startTimer(startTime);
        dispatch(TimeActions.setStartTime(startTime));

        return () => timer.clearCurrentInterval();
    }, [startTime]);
    return (
        <div>
            <Navbar/>
            <Routes/>
        </div>
    )
}

export default App

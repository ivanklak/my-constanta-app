import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";

import Routes from "./routes";
import Navbar from "./components/Navbar";
import {TimeActions} from "../Timer/actions";

const App: FC = () => {
    const dispatch = useDispatch();

    const startTime = new Date().getTime();

    useEffect(() => {
        dispatch(TimeActions.setStartTime(startTime));
    }, [startTime]);
    return (
        <div>
            <Navbar/>
            <Routes/>
        </div>
    )
}

export default App

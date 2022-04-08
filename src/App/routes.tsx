import React, {FC, Suspense} from "react";
import {Route, Switch} from 'react-router-dom';

import Loader from "./components/Loader/Loader";

const InfoComponent = React.lazy(() => import('../Info'));
const MapsComponent = React.lazy(() => import('../Maps'));
const TimeComponent = React.lazy(() => import('../Timer'));

const Routes: FC = () => (
    <Switch>
        <Suspense fallback={<Loader />}>
            <Route path='/' exact component={InfoComponent} />
            <Route path='/maps' component={MapsComponent} />
            <Route path='/timer' component={TimeComponent} />
        </Suspense>
    </Switch>
)

export default Routes;
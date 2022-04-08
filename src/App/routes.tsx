import React from "react";
import {Route, Switch} from 'react-router-dom';

import Info from "../Info";
import Maps from "../Maps";
import Time from "../Timer";

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Info}/>
        <Route path='/maps' exact component={Maps}/>
        <Route path='/timer' exact component={Time}/>
    </Switch>
)

export default Routes;
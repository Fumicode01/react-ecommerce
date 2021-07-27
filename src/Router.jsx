import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router'
import {Home, SignUp} from './templates'

const Router = () => {
    return (
            <Switch>
                <Route exact path={"/signup"} component={SignUp} />
                <Route exact path={"(/)?"} component={Home} />
            </Switch>
    )
}

export default Router
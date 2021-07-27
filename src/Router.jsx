import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {SignUp} from './templates'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/signup"} component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
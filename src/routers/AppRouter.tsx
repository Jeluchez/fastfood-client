import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route 
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const isLoggedIn=true;
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={isLoggedIn} />
                    {/* <PrivateRoute exact path="/" component={PhrasesScreen} isLoggedIn={isLoggedIn} />
                    <PrivateRoute exact path="/home/photo" component={PhrasesImagesScreen} isLoggedIn={isLoggedIn} />
                    <PrivateRoute exact path="/home/selectedphrase" component={SelectedPhraseScreen} isLoggedIn={isLoggedIn} /> */}
                </Switch>
            </div>
        </Router>
    )
}

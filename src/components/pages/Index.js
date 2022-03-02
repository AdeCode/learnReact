import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Material from '../pages/Material';
import Formik from './Formik';
import StepForm from '../stepper/StepForm';

export default function Index() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/material">Material</Link>
                        </li>
                        <li>
                            <Link to="/formik">Formik</Link>
                        </li>
                        <li>
                            <Link to="/stepform">StepForm</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>               
                <Route exact path="/material">
                    <Material />
                </Route>
                <Route exact path="/stepform">
                    <StepForm />
                </Route>   
                <Route exact path="/formik">
                    <Formik />
                </Route>             
            </Switch>
        </Router>
    )
}

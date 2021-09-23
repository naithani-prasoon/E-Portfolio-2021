import React from 'react'
import {Route, Switch} from "react-router-dom";
import LandingPageAbout from "../About/AboutLandingPage";
import LandingPageProject from "../Project/ProjectLandingPage";
import LandingPageExperience from "../Experience/ExperienceLandingPage";
import HomeLandingPage from "../Home/HomeLandingPage";

function RouterSwitch(){
    return(
        <Switch>
            <Route path="/about">
                <LandingPageAbout/>
            </Route>
            <Route path="/projects">
                <LandingPageProject/>
            </Route>
            <Route path="/experience">
                <LandingPageExperience/>
            </Route>
            <Route path="/" exact>
                <HomeLandingPage/>
            </Route>

        </Switch>
    )
}

export default RouterSwitch;
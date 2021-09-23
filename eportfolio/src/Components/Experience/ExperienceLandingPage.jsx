import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Theme} from "pretty-format/build/types";
import scrollDown from "../Assets/scroll-down.svg";
import Container from "@material-ui/core/Container";
import WorkExperience from "./WorkExperience";
import CourseWork from "./CourseWork";
import SocialWork from "./SocialWork";
import CampusInvolvement from "./CampusInvolvement";
import Text from "../Text/Text";
import blob3 from "../Assets/blob-3.svg";

const useStyles = makeStyles((theme:Theme)=>({

    scroll: {
        width:'40px',
        animation: 'up-down 2s infinite',
    },
}));

function LandingPageExperience(){
    const classes = useStyles();

    return(
        <div>
            <div className="homepage">
                <div className="blob">
                    <div>
                        <img src={blob3} alt={"Background Blob"}/>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                    <Text data={"NISSHA MEDICAL SUMMER INTERN 2021."} variant={"banner-info"}/>
                    <Text data={"my experience."} variant={"banner-heading"}/>
                    <Text variant={"banner-subheading"} data={"CURRENTLY LOOKING FOR A FULL TIME OPPORTUNITY."}/>
                    <div style={{marginTop:'48px'}}>
                        <img className={classes.scroll} src={scrollDown} alt={"Scroll Down Logo"}/>
                    </div>
                </div>
            </div>
            <Container style={{display:'flex',justifyContent:"space-around", alignItems:'flex-start',margin:'0 auto 64px auto',flexDirection:'column'}}>

                <WorkExperience/>
                <div className="experience-sections">
                    <CourseWork/>
                    <CampusInvolvement/>
                </div>
                <SocialWork/>
            </Container>
        </div>
    )
}

export default LandingPageExperience;
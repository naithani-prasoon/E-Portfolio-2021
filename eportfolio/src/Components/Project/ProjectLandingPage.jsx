import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Theme} from "pretty-format/build/types";
import scrollDown from "../Assets/scroll-down.svg";
import WorkExperience from "../Experience/WorkExperience";
import CourseWork from "../Experience/CourseWork";
import SocialWork from "../Experience/SocialWork";
import CampusInvolvement from "../Experience/CampusInvolvement";
import Container from "@material-ui/core/Container";
import ProjectCard from "./ProjectCard";
import cse312TeamProject from '../Assets/pixmate.jpg'
import cse312IndividualProject from '../Assets/social.jpg'
import raul from '../Assets/raul.jpeg'

//Logos for project cards.
import cssLogo from '../Assets/languages-svg/css.svg'
import pythonLogo from '../Assets/languages-svg/python.svg'
import htmlLogo from '../Assets/languages-svg/html.svg'
import jsLogo from '../Assets/languages-svg/javascript.svg'
import dockerLogo from '../Assets/languages-svg/docker.svg'
import reactLogo from '../Assets/languages-svg/react.svg'
import djangoLogo from '../Assets/languages-svg/django.svg'
import gitLogo from '../Assets/languages-svg/git.svg'
import scalaLogo from '../Assets/languages-svg/scala.svg'
import sqlLogo from '../Assets/languages-svg/sql.svg'
import mongoLogo from '../Assets/languages-svg/mongodb.svg'
import Text from "../Text/Text";
import blob3 from "../Assets/blob-3.svg";

const useStyles = makeStyles((theme:Theme)=>({

    scroll: {
        width:'40px',
        animation: 'up-down 2s infinite',
    },
}));

function LandingPageProject(){
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
                    <Text data={"OPEN FOR COLLABORATIONS."} variant={"banner-info"}/>
                    <Text variant={"banner-heading"} data={"my projects."}/>
                    <Text variant={"banner-subheading"} data={"CURRENTLY DEVELOPING AN E-COMMERCE WEB APP."}/>

                    <div style={{marginTop:'48px'}}>
                        <img className={classes.scroll} src={scrollDown} alt={"Scroll Down Icon"}/>
                    </div>
                </div>
            </div>
            <Container className="project-container">
                <Text variant={"paragraph-heading"} data={"PROJECTS."}/>
                <ProjectCard projectName={"Pixmate"} projectDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.\n"}
                githubBoolean={true} liveBoolean={false} image={cse312TeamProject} languages={[htmlLogo,cssLogo,jsLogo,pythonLogo,mongoLogo, dockerLogo]} link={"https://github.com/naithani-prasoon/CSE312-Project"}/>

                <ProjectCard projectName={"Social Media Clone"} projectDescription={"Developed a social-media clone including a user authentication system, live messaging feature, and image uploading feature. Only used socket library of Python language to manipulate strings on the server side for receiving bits and sending bits.\n"}
                 githubBoolean={true} liveBoolean={false} image={cse312IndividualProject} languages={[htmlLogo,cssLogo,pythonLogo,mongoLogo,dockerLogo]} link={"https://github.com/naithani-prasoon/CSE-312"}/>

                <ProjectCard projectName={"Raul Avila Inc."} projectDescription={"Utilizing Python’s Django framework created a backend that included a user authentication system, and inventory management. Using HTML, CSS, and JS created a dynamic frontend to allow employees to make changes to the website.\n"}
                 githubBoolean={false} liveBoolean={true} image={raul} languages={[htmlLogo,cssLogo, jsLogo, djangoLogo, pythonLogo]} link={"https://github.com/naithani-prasoon/CSE-312"}/>

            </Container>
        </div>
    )
}

export default LandingPageProject;
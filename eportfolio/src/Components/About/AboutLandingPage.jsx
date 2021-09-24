import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Theme} from "pretty-format/build/types";
import AboutSection from "./AboutSection";
import scrollDown from "../Assets/scroll-down.svg"
import Container from "@material-ui/core/Container";
import SkillSection from "./SkillSection";
import Text from "../Text/Text";
import blob3 from "../Assets/blob-3.svg";
import Teekhamomo from "./Teekhamomo";

const useStyles = makeStyles((theme:Theme)=>({

    scroll: {
        width:'40px',
        animation: 'up-down 2s infinite',
    },

    about: {
        display:'flex',
        justifyContent:"space-around",
        alignItems:'flex-start',
        margin:'0 auto 64px auto',
        flexDirection:'column',
    },

    section: {
        display:'flex',
        justifyContent:'space-around',
        alignContent:'center',
        width:'100%',
        flexWrap:'wrap',
    },


}));

function LandingPageAbout(){
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
                    <Text variant={"banner-info"} data={"ASPIRING FULL STACK DEVELOPER."}/>
                    <Text variant={"banner-heading"} data={"my background"}/>
                    <Text variant={"banner-subheading"} data={"PART TIME PHOTOGRAPHER | GRAPHIC ARTIST | COOK | FOOTBALL FANATIC."}/>
                    <div style={{marginTop:'48px'}}>
                        <img className={classes.scroll} src={scrollDown} alt={"Scroll Down Icon"}/>
                    </div>
                </div>
            </div>
            <Container className={classes.about}>
                <AboutSection/>
                <div className={classes.section}>
                    <SkillSection/>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <Text variant={"paragraph-heading"} data={"CURRENT JAM"}/>
                        <iframe className="spotify" src="https://open.spotify.com/embed/track/3USxtqRwSYz57Ewm6wWRMp?theme=0" width="100%" height="300" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    </div>
                </div>
                <div className={classes.section} style={{marginTop:'48px', fontSize:'24px'}}>
                    <div className="about-me-text" style={{padding:'24px 24px',lineHeight:'28px',
                    letterSpacing:'1px', fontSize:'18px',fontWeight:'400', width:'auto'}}>
                        Coming to University at Buffalo, has helped me advance my inclinations further for the better.
                        I have consistently believed in offering back to society and through my aptitudes and encounters,
                        I expect to leave a profound impact by creating something significant which will be helpful and
                        critical to the forthcoming youth.
                    </div>
                </div>
                <Teekhamomo/>
            </Container>
        </div>
    )
}

export default LandingPageAbout;
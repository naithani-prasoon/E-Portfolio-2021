import React from 'react'
import worldMap from '../Assets/map.png'
import Text from "../Text/Text";

function AboutSection(){
    return(
        <div>
            <Text variant={"paragraph-heading"} data={"LITTLE ABOUT ME."}/>
            <div className="about-me-text" style={{padding:'24px 24px',lineHeight:'28px',
            letterSpacing:'1px', fontSize:'18px',fontWeight:'400', width:'auto'}}>
                I am an international student majoring in <b>Computer Science</b> with
                a <b>minor in Mathematics</b>. Pursuing my <b>four year undergraduate degree</b> at The State University of
                New York (a.k.a. <b>University at Buffalo</b>) has helped me realize my strengths in aspects
                of <b>designing, coding, critical thinking, and creativity.</b>
            </div>
            <div className="located">
                <img className="map" src={worldMap} alt={"World Map"}/>
                <h5 className="located-text">
                    Back in 2018, I moved from <b>New Delhi (India)</b> to <b>Buffalo, New York (the United States of America)</b> for
                    my Bachelors Degree.
                </h5>
            </div>
        </div>
    )
}

export default AboutSection;
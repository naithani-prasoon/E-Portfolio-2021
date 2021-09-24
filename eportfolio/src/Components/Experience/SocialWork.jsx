import React from 'react'
import Text from "../Text/Text";

function SocialWork(){
    return(
        <div style={{marginTop:'48px', width:'100%'}}>
            <Text variant={"paragraph-heading"} data={"SOCIAL WORK EXPERIENCE."}/>
            <div className="social-work" style={{display:'flex', justifyContent:'space-around', width:'100%', alignItems:'center', textAlign:'center', marginTop:'24px'}}>
                <div className="social-exp">
                    <Text data={"CSE Mentor"} variant={"campus-involvement-heading"}/>
                    <Text variant={"experience-duration"} data={"AUGUST 2021 - PRESENT"}/>
                    <Text data={"UNIVERSITY AT BUFFALO"} variant={"campus-involvement-org"}/>
                    <Text variant={"experience-location"} data={"BUFFALO, NY"}/>
                </div>
                <div className="social-exp">
                    <Text data={"Volunteer"} variant={"campus-involvement-heading"}/>
                    <Text variant={"experience-duration"} data={"DECEMBER 2016"}/>
                    <Text data={"ROUND SQUARE"} variant={"campus-involvement-org"}/>
                    <Text variant={"experience-location"} data={"NATHON KA PURA, INDIA"}/>
                </div>
                <div className="social-exp">
                    <Text data={"Volunteer"} variant={"campus-involvement-heading"}/>
                    <Text variant={"experience-duration"} data={"JUNE 2016"}/>
                    <Text data={"ROUND SQUARE"} variant={"campus-involvement-org"}/>
                    <Text variant={"experience-location"} data={"THIKSEY, INDIA"}/>
                </div>

            </div>

        </div>
    )
}

export default SocialWork;
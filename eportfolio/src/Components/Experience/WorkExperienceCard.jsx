import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core";
import Text from "../Text/Text";

const useStyles = makeStyles((theme:Theme)=>({
    support:{
        fontFamily:'Urbanist,sans-serif',
        fontSize:'20px',
        margin:'8px 0 0 0'
    },
}));

function WorkExperienceCard({title, duration, organization, location, description} : {title:string, duration:string, organization:string,
                            location:string, description:string}){

    const classes = useStyles();

    return(
        <div>
            <div className="experience-card">
                <div className="experience-info-title">
                    <div className="background-shape"/>
                    <Text data={title} variant={"experience-heading"}/>
                    <Text variant={"experience-duration"} data={duration}/>
                    <Text data={organization} variant={"experience-organization"}/>
                    <Text data={location} variant={"experience-location"}/>
                </div>
                <div className="experience-details" style={{margin:'0 48px', width:'100%', fontSize:'16px', textAlign:'justify', lineHeight:'28px', padding:'10px 25px'}}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceCard;
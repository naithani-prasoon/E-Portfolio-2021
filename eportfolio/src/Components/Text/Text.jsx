import React from 'react'
import {makeStyles} from "@material-ui/core";
import {Theme} from "pretty-format/build/types";

const useStyles = makeStyles((theme:Theme)=>({

    paragraphHeading: {
        fontSize:'24px',
        fontWeight:'300',
        letterSpacing:'2px',
        padding:'12px 0'
    },

    bodyText: {
        lineHeight:'28px',
        letterSpacing:'1px',
        fontSize:'18px',
        fontWeight:'400',
        padding:'12px 0'
    },
}));

function Text({variant, data} : {variant:string , data:string}){

    const classes = useStyles();

    let formattedText;
    if (variant === 'campus-involvement-org'){
        formattedText = <h3 className="campus-involvement-org">{data}</h3>
    }
    else if(variant === "campus-involvement-heading"){
        formattedText = <h3 className="campus-involvement-heading">{data}</h3>
    }
    else if(variant === 'experience-location'){
        formattedText = <h3 className="experience-location">{data}</h3>
    }
    else if(variant === 'experience-organization'){
        formattedText = <h3 className="experience-organization">{data}</h3>
    }
    else if(variant === 'experience-duration'){
        formattedText = <h3 className="experience-duration">{data}</h3>
    }
    else if(variant === 'experience-heading'){
        formattedText = <h1 className="experience-heading">{data}</h1>
    }
    else if(variant === 'banner-heading'){
        formattedText = <h1 className="banner-heading">{data}</h1>
    }
    else if(variant === 'banner-subheading'){
        formattedText = <h5 className="banner-subheading">{data}</h5>
    }
    else if(variant === 'banner-info'){
        formattedText = <h4 className="banner-info">{data}</h4>
    }
    else if(variant === 'paragraph-heading'){
        formattedText = <h5 className="paragraph-heading">{data}</h5>
    }
    else{
        formattedText = <p className="body-text">{data}</p>
    }
    return(
        <div>
            {formattedText}
        </div>
    )
}

export default Text;
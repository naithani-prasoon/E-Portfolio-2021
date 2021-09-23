import React from 'react'
import cLogo from '../Assets/languages-svg/c.svg'
import cssLogo from '../Assets/languages-svg/css.svg'
import pythonLogo from '../Assets/languages-svg/python.svg'
import htmlLogo from '../Assets/languages-svg/html.svg'
import jsLogo from '../Assets/languages-svg/javascript.svg'
import reactLogo from '../Assets/languages-svg/react.svg'
import djangoLogo from '../Assets/languages-svg/django.svg'
import gitLogo from '../Assets/languages-svg/git.svg'
import scalaLogo from '../Assets/languages-svg/scala.svg'
import sqlLogo from '../Assets/languages-svg/sql.svg'
import photoshopLogo from '../Assets/languages-svg/adobe-photoshop.svg'
import xdLogo from '../Assets/languages-svg/adobe-xd.svg'
import premiereLogo from '../Assets/languages-svg/adobe-premiere-pro.svg'
import netLogo from '../Assets/languages-svg/microsoft-dot-net.svg'
import mongoLogo from '../Assets/languages-svg/mongodb.svg'
import microsoftLogo from '../Assets/languages-svg/microsoft-office.svg'
import bootLogo from '../Assets/languages-svg/bootstrap.svg'
import lightLogo from '../Assets/languages-svg/adobe-lightroom.svg'
import Text from "../Text/Text";

function SkillSection(){

    return(
        <div>
            <Text variant={"paragraph-heading"} data={"TECHNICAL SKILLS."}/>
            <div className="skill">
                <img className="skill-logo" src={cLogo} alt={"C Language Logo"}/>
                <img className="skill-logo" src={cssLogo} alt={"CSS Logo"}/>
                <img className="skill-logo" src={jsLogo} alt={"JavaScript Logo"}/>
                <img className="skill-logo" src={htmlLogo} alt={"HTML Logo"}/>
                <img className="skill-logo" src={bootLogo} alt={"Bootstrap Logo"}/>
                <img className="skill-logo" src={reactLogo} alt={"React Logo"}/>
            </div>
            <div className="skill">
                <img className="skill-logo" src={scalaLogo} alt={"Scala Logo"}/>
                <img className="skill-logo" src={lightLogo} alt={"Adobe Lightroom Logo"}/>
                <img className="skill-logo" src={photoshopLogo} alt={"Adobe Photoshop Logo"}/>
                <img className="skill-logo" src={premiereLogo} alt={"Adobe Premiere Logo"}/>
                <img className="skill-logo" src={xdLogo} alt={"Adobe XD Logo"}/>
                <img className="skill-logo" src={pythonLogo} alt={"Python Logo"}/>
            </div>
            <div className="skill">
                <img className="skill-logo" src={gitLogo} alt={"Git Logo"}/>
                <img className="skill-logo" src={mongoLogo} alt={"MongoDB Logo"}/>
                <img className="skill-logo" src={sqlLogo} alt={"SQL Logo"}/>
                <img className="skill-logo" src={netLogo} alt={".NET Logo"}/>
                <img className="skill-logo" src={microsoftLogo} alt={"Microsoft Office Logo"}/>
                <img className="skill-logo" src={djangoLogo} alt={"Django Logo"}/>
            </div>

        </div>
    )
}

export default SkillSection;
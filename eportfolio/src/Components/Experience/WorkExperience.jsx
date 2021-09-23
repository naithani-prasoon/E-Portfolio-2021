import React from 'react'
import WorkExperienceCard from "./WorkExperienceCard"
import Text from "../Text/Text";

function WorkExperience(){
    return(
        <div>
            <Text variant={"paragraph-heading"} data={"WORK EXPERIENCE."}/>
            <div className="experience-box">
                <WorkExperienceCard title={"Web-App Developer"} duration={"June 2021 - August 2021"} organization={"Nissha Medical Technologies"} location={"Buffalo, New York"} description={"I got the opportunity to explore my skills at Nissha Medical Technologies. The primary responsibility was to design, build, test, and maintain existing software applications and data products. Used Microsoft SQL Server, Visual Basic.NET, Javascript, CSS, and HTML to update the data-based web application and gave it a new User Interface. "}/>
                <WorkExperienceCard title={"Front-End Developer"} location={"Buffalo, New York"} duration={"June 2020 - August 2020"} organization={"Raul Avila Inc."} description={"In the summer of 2020, I utilized the opportunity to explore my skills at Raul Inc. This opportunity focussed on a wide variety of work, which included me to freelance an eCommerce web app, develop and design a website for Raul Inc., and use HTML5, CSS, and JavaScript to design a front-end framework."}/>
                <WorkExperienceCard title={"UBIT Site Consultant"} duration={"January 2020 - July 2020"} organization={"University at Buffalo"} location={"Buffalo, New York"} description={"Provided general customer service to patrons of Public Computing Sites across the campus. Managed printers and gave computing support to those who were in need. Handled networking of more than 100 computing stations located all around the campus. Maintained inventory."}/>
            </div>
        </div>
    )
}

export default WorkExperience;
import React from 'react'
import WorkExperienceCard from "./WorkExperienceCard";
import Text from "../Text/Text";

function SocialWork(){
    return(
        <div style={{marginTop:'48px'}}>
            <Text variant={"paragraph-heading"} data={"SOCIAL WORK EXPERIENCE."}/>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <WorkExperienceCard title={"CSE Mentor"} duration={"August 2021 - Present"} organization={"SEAS Department at UB"} location={"Buffalo, New York"} description={"Constructed two rooms for the boarding house of the Lamdon Model School, Thiksey-Ladakh. The nature of the work was \"unskilled labor\" which included carrying heavy bricks, a large number of wood-beams, and the preparation of mortar. The project was initiated by the Scindia School under the aegis of the Round Square Regional (SA and Gulf)."}/>
                <WorkExperienceCard title={"Student Volunteer"} duration={"December 2016"} organization={"Round Square"} location={"Nathon Ka Pura, MP"} description={"Being a part of the Round Square Service Project assistance venture, facilitated by the Scindia School permitted me to clean,\n" +
                "                        remake/construct a sewer framework all over the rural zones of Nathon Ka Pura. We likewise got the chance to empower the women\n" +
                "                        of the village, by giving the ladies crude materials to stitch, and sell. Moreover, we developed 2 toilets, from scratch \n" +
                "                        for the village's school which was in the provincial territory."}/>
                <WorkExperienceCard title={"Student Volunteer"} duration={"June 2016"} organization={"Round Square"} location={"Thiksey, Ladakh"} description={"Constructed two rooms for the boarding house of the Lamdon Model School, Thiksey-Ladakh. The nature of the work was \"unskilled labor\" which included carrying heavy bricks, a large number of wood-beams, and the preparation of mortar. The project was initiated by the Scindia School under the aegis of the Round Square Regional (SA and Gulf)."}/>
            </div>

        </div>
    )
}

export default SocialWork;
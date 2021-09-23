import React from 'react'
import Text from "../Text/Text";

function CampusInvolvement(){
    return(
        <div className="campus-involvement">
            <Text variant={"paragraph-heading"} data={"CAMPUS INVOLVEMENT."}/>
            <div className="campus-involvement-info">
                <div>
                    <Text data={"Graphic Artist"} variant={"campus-involvement-heading"}/>
                    <Text variant={"experience-duration"} data={"TIME VARIES (2019-2021)"}/>
                    <Text data={"UB Hacking 2021 (Since 2021)"} variant={"campus-involvement-org"}/>
                    <Text data={"Developer Student CLub UB (2019)"} variant={"campus-involvement-org"}/>
                    <Text data={"Undergraduate SA (Since 2021)"} variant={"campus-involvement-org"}/>
                </div>
            </div>
        </div>
    )
}

export default CampusInvolvement;
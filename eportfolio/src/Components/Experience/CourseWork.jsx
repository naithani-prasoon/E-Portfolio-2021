import React from 'react'
import CourseWorkCard from "./CourseWorkCard";
import Text from "../Text/Text";

function CourseWork(){
    return(
        <div>
            <Text variant={"paragraph-heading"} data={"RELATED COURSEWORK."}/>
            <div className="coursework-div" style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', marginTop:'24px', alignContent:'center'}}>
                <CourseWorkCard course={"Intro to Web Application"} link={"https://catalog.buffalo.edu/courses/index.php?abbr=CSE&num=312"}/>
                <CourseWorkCard course={"Algorithms and Time Complexity"} link={"https://catalog.buffalo.edu/courses/?abbr=CSE&num=331"}/>
                <CourseWorkCard course={"Intro to Data Structures"} link={"https://catalog.buffalo.edu/courses/?abbr=CSE&num=250"}/>
                <CourseWorkCard course={"Software Quality in Practice"} link={"https://catalog.buffalo.edu/courses/index.php?abbr=CSE&num=306"}/>
            </div>
        </div>
    )
}

export default CourseWork;
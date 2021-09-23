import React from 'react'

function CourseWorkCard({course, link} : {course:string, link:string}){
    return(
        <div>
            <div style={{padding:'16px 24px', display:'flex', alignItems:'flex-start', width:'110px'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h3 style={{fontSize:'18px', textTransform:'uppercase', fontFamily:'Urbanist,sans-serif', fontWeight:'600'}}>{course}</h3>
                    <a style={{marginTop:'4px', fontWeight:'600', fontSize:'12px', textTransform:'uppercase', color:'rgb(180,180,180)'}} href={link}> View Course Catalog.</a>
                </div>
            </div>
        </div>
    )
}

export default CourseWorkCard;
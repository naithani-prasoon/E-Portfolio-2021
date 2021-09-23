import React from 'react'
import Box from "@material-ui/core/Box";
import githubLogo from '../Assets/languages-svg/github.png'
import right from '../Assets/arrow-rightward.svg'


function ProjectCard({projectName, projectDescription, githubBoolean, liveBoolean, image, languages, link}: {
    projectName: string, projectDescription: string, githubBoolean: boolean, liveBoolean: boolean,
    image: ImageBitmap, languages: any, link: webkitURL
}){

    return(
        <div className="project-div" style={{width:'100%', marginTop:'24px'}}>
            <Box className="project-box">
                <img style={{width:'100%', position:'relative'}} src={image} alt={"Background Image"}/>
                <div className="project-card">
                    <div className="project-div" style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                        <div className="filler-div"/>
                        <div className="project-text-card">
                            <h1 style={{fontSize:'40px', marginTop:'32px'}}> {projectName}</h1>
                            <div>
                                <h5 style={{fontSize:'18px', fontWeight:'300', lineHeight:'28px', marginTop:'24px'}}>
                                    {projectDescription}
                                </h5>
                                <div style={{display:'flex',flexDirection:'column', marginTop:'24px'}}>
                                    <h5 style={{fontSize:'20px', fontWeight:'500'}}>LANGUAGES:</h5>
                                    <div style={{display:'flex',flexDirection:'row', marginTop:'24px', justifyContent:'space-around'}}>
                                        {languages.map((value) => {
                                            return <img src={value} width={"40px"} alt={"Language Logo"}/>
                                        })}

                                    </div>
                                </div>
                                {githubBoolean == true
                                    ?
                                    <div style={{display:'flex',flexDirection:'column', marginTop:'48px', width:'100%', alignItems:'center'}}>
                                        <a target={'_blank'} href={link} className="project-button">
                                            View On Github
                                            <img src={githubLogo} width={'25px'} alt={"Github Logo"}/>
                                        </a>
                                    </div>
                                    :
                                    ''
                                }

                                {liveBoolean == true
                                    ?
                                    <div style={{display:'flex',flexDirection:'column', marginTop:'48px', width:'100%', alignItems:'center'}}>
                                        <a target={'_blank'} href={link} className="project-button">
                                            View Live Site
                                            <img src={right} width={'25px'} alt={"Rightward Arrow"}/>
                                        </a>
                                    </div>
                                    :
                                    ''
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default ProjectCard;
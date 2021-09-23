import React from 'react'
import Text from "../Text/Text";
import blob from "../Assets/blob.svg"
import blob2 from "../Assets/blob-2.svg"
import blob3 from "../Assets/blob-3.svg"
import blob4 from "../Assets/blob-4.svg"


function HomeLanding(){
    return(
        <div>
            <div className="homepage" style={{margin:'0 auto'}}>
                <div className="blob">
                    <div>
                        <img src={blob3} alt={"Background Blob"}/>
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                    <Text variant={"banner-info"} data={"GIVE LIFE TO CREATIVE IDEAS."}/>
                    <Text variant={"banner-heading"} data={"hello world."}/>
                    <Text variant={"banner-subheading"} data={"STUDENT AT SUNY BUFFALO | BS COMPUTER SCIENCE"}/>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding;
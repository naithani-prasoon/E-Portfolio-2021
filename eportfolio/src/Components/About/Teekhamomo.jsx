import React from 'react'
import teekhamomo1 from '../Assets/teekhamomo/1.jpg'
import teekhamomo2 from '../Assets/teekhamomo/2.jpg'
import teekhamomo3 from '../Assets/teekhamomo/3.jpg'
import teekhamomo4 from '../Assets/teekhamomo/4.jpg'
import teekhamomo5 from '../Assets/teekhamomo/5.jpg'
import teekhamomo6 from '../Assets/teekhamomo/6.jpg'
import instagram from '../Assets/buttons/instagram.png'
import Text from "../Text/Text";

function Teekhamomo(){
    return(
        <div style={{marginTop:'48px'}}>
            <div className="teekhamomo-heading" style={{display:'flex', alignItems:'center'}}>
                <a href={"https://instagram.com/teekhamomo"} target={"_blank"}><img width={"30px"} src={instagram} alt={"Instagram Logo"} style={{marginRight:'15px', marginTop:'5px'}}/></a>
                <Text variant={"paragraph-heading"} data={"@TEEKHAMOMO"}/>
                </div>
            <div className="teekhamomo-grid" style={{display:'flex', flexWrap:'wrap', width:'100%', justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:'24px'}}>
                <img src={teekhamomo1} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
                <img src={teekhamomo2} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
                <img src={teekhamomo5} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
                <img src={teekhamomo4} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
                <img src={teekhamomo3} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
                <img src={teekhamomo6} className="teekhamomo" alt={"@teekhamomo Instagram Photos"} width={"400px"}/>
            </div>
        </div>
    )
}

export default Teekhamomo;
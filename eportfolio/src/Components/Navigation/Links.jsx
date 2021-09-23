import React from 'react'
import  {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import {Theme} from "pretty-format/build/types";
import hamburgerMenu from '../Assets/menu.svg'
import closeMenu from '../Assets/close.svg'
import { useState } from 'react';

const useStyles = makeStyles((theme:Theme)=>({

    pages: {
        display:'flex',
        justifyContent:'center',
        marginRight:'24px'
    },
    nav: {
        display:'flex',
        alignItems:'center',
        width:'100%',
        justifyContent:'space-evenly'
    },

    logo:{
        textAlign:'left',
        width:'300px',
        color: '#f5f2e8',
        letterSpacing:'1px',
    },

    page_links:{
        padding: '0 42px 0 0',
        fontFamily: 'Urbanist, sans-serif',
        fontWeight:'500',
        color: '#f5f2e8',
        textTransform:'uppercase'
    },

}));

function NavigationLinks() {

    const classes = useStyles()

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return(
            <div className={classes.nav}>
                <div className={classes.logo}><h3>Prasoon Naithani</h3></div>
                <div className="menu">
                    <Link to="/" className="page-links">Home</Link>
                    <Link to="/about" className="page-links">About</Link>
                    <Link to="/experience" className="page-links">Experience</Link>
                    <Link to="/projects" className="page-links">Projects</Link>
                </div>
                <div className="hamburger">
                    <img className="hamburger-icon" src={sidebar ? closeMenu : hamburgerMenu} onClick={showSidebar} />
                    <div className={sidebar ?  "hamburger-menu active" : "hamburger-menu"} onClick={showSidebar}>
                        <Link to="/" className="hamburger-links">Home</Link>
                        <Link to="/about" className="hamburger-links">About</Link>
                        <Link to="/experience" className="hamburger-links">Experience</Link>
                        <Link to="/projects" className="hamburger-links">Projects</Link>
                    </div>
                </div>
            </div>
    )
}

export default NavigationLinks;
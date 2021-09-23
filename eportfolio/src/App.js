import React, {useState} from 'react'
import Navigation from "./Components/Navigation/NavigationBar";
import {BrowserRouter} from "react-router-dom";
import RouterSwitch from "./Components/Routes/RoutePath";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./Components/Dark-Mode/GlobalStyles";
import {lightTheme, darkTheme} from "./Components/Dark-Mode/Theme";
import dark from "./Components/Assets/dark-mode.svg";
import light from "./Components/Assets/light-mode.png";
import github from "./Components/Assets/buttons/github.png"
import resumeDoc from "./Components/Assets/Prasoon's Resume.pdf"

import arrowUpDark from './Components/Assets/buttons/arrow-up-dark.png';
import resumeDark from "./Components/Assets/buttons/resume.png"
import instagramDark from "./Components/Assets/buttons/instagram.png"
import discordDark from "./Components/Assets/buttons/discord.png"
import linkedinDark from "./Components/Assets/buttons/linkedin.png"


function App() {

    const [theme, setTheme] = useState('light');
    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const [social,setSocial] = useState(false);
    const socialToggle = () => setSocial(!social)

  return (
        <BrowserRouter>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                <GlobalStyles/>
                    <div style={{margin:'0 auto',display:'flex',width:'100%',flexDirection:'column', position:'relative'}}>

                        <div className="social-bar">
                            <button className="theme-toggle"  onClick={themeToggle}>
                                {theme === 'light' ? <img src={dark} alt={"Dark Mode Icon"}/> : <img src={light} alt={"Light Mode Icon"}/> }
                            </button>
                            <a className="theme-toggle" target="_blank" href={resumeDoc}>
                                {theme === 'light' ? <img src={resumeDark} alt={"Resume Icon"}/> : <img src={resumeDark} alt={"Resume Icon"}/> }
                            </a>
                            <button className="theme-toggle" onClick={socialToggle} style={{cursor:'pointer'}}>
                                {theme === 'light' ? <img src={arrowUpDark} alt={"Expand Arrow Icon"}/> : <img src={arrowUpDark} alt={"Expand Arrow Icon"} /> }

                            </button>
                            <div className={social ? 'social-icons-show' : 'social-icons'} >
                                <a className="theme-toggle" href="https://www.instagram.com/prasoon_naithani/" target="_blank">
                                    {theme === 'light' ? <img src={discordDark} alt={"Discord Icon"}/> : <img src={discordDark} alt={"Discord Icon"}/> }
                                </a>
                                <a className="theme-toggle" href="https://github.com/naithani-prasoon" target="_blank">
                                    {theme === 'light' ? <img src={github} alt={"Github Icon"}/> : <img src={github} alt={"Github Icon"}/> }
                                </a>
                                <a className="theme-toggle" href="https://linkedin.com/in/prasoon-naithani-408518165/" target="_blank">
                                    {theme === 'light' ? <img src={linkedinDark} alt={"Linkedin Icon"}/> : <img src={linkedinDark} alt={"Linkedin Icon"}/> }
                                </a>
                                <a className="theme-toggle" href="https://www.instagram.com/prasoon_naithani/" target="_blank">
                                    {theme === 'light' ? <img src={instagramDark} alt={"Instagram Icon"}/> : <img src={instagramDark} alt={"Instagram Icon"}/> }
                                </a>
                            </div>
                        </div>
                        <Navigation/>
                        <RouterSwitch/>
                    </div>
                </>
            </ThemeProvider>
        </BrowserRouter>
  );
}

export default App;

import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  .navbar{
    background:${({ theme }) => theme.navbar};
  }
  
  .experience-duration,.hamburger-links{
    color: ${({ theme }) => theme.experience} ;
  }

  .project-text-card{
    background: ${({ theme }) => theme.projectCard};
  }

  .experience-info-title .background-shape{
    background: ${({theme}) => theme.backgroundShape}
  }

  .hamburger-menu{
    background: ${({theme})=> theme.hamburgerMenu};
  }
  
  .hamburger-icon{
    background: ${({theme})=> theme.hamburgerIconColor};
    padding: ${({theme})=> theme.hamburgerIconPadding};
    border-radius: ${({theme})=> theme.hamburgerIconBorderRadius};
  }
  
  .theme-toggle{
    background: ${({theme})=> theme.themeToggle};
  }

  .experience-sections{
    background: ${({theme})=> theme.campusCourseworkBG};
  }
  
  .homepage{
    background: ${({theme})=> theme.homepageBackground};
  }
  
  .project-button{
    background: ${({theme})=> theme.projectButtonBG};
  }
  
  `

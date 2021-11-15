import React from "react";
import icongit from '../img/github.png'
import iconlinkedin from '../img/linkedin.png'
import iconinstagram from '../img/instagram.png'
import icongmail from '../img/gmail.png'



const Footer = (temaEscuro) => {
    
    return (
      <>
        <footer id="footer" className={`d-flex flex-wrap justify-content-between align-items-stretch py-3 border-top text-${temaEscuro ? 'light' : 'dark'} bg-${temaEscuro ? 'dark' : 'light'}`}>
         
      {/* <div className="container-fluid d-flex justify-content-md-start align-items-stretch  " > */}

      <div className="container-md d-left my-3">
        <a href="https://www.github.com/patyspro" alt= "github" className="me-3">
        <img src={icongit} alt="git" className="me-2"/></a> 
   
        <a href="https://www.linkedin.com/in/patyspro" alt="linkedin">
        <img src={iconlinkedin} alt="linkedin" className="me-2"/></a> 
      
        
        <a href = "mailto: patyspro@gmail.com">
        <img src={icongmail} alt="gmail" className="me-2"/></a>
        
        <a href="https://instagram.com/patyspro" alt="instagram">
        <img src={iconinstagram} alt="instagram" className="me-2"/></a>
     
        {/* </div> */}
        </div>
        <div className="container-md  my-3">
        <p className="d-flex">&copy; 2021 - Patrícia Sprovieri</p>
        </div>
        
        
   
  
    </footer>
    </>
    )
    }
   
    export default Footer;
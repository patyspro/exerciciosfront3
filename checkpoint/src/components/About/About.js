import React from 'react';
import styled from 'styled-components';
import Curly from './Curly' 
import Resume from './Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgpaty from '../img/patricia.jpeg'


const AboutSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <div  
                >
                <StyledAbout>
                    <div className = "description" id="about" >
                        <div className = "title">
                        <BigText >
                        <HI data-aos="fade-right">Olá!</HI>
                            <h2 data-aos="fade-right" data-aos-delay="100"> Meu nome é <StyledA data-aos="fade-right" data-aos-delay="100">Patricia Sprovieri</StyledA>
                            </h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="300">
                            <h2 ><span>e eu sou uma</span></h2>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="500">
                            <H2 ><span>Desenvolvedora Full Stack.</span></H2>
                        </BigText>
                    </div>
                        <P data-aos="fade-up" >Eu sou muito fascinada por front-end development mas, eu também amo trabalhar com back-end!
                        </P>
                    <Resume class="resume" />
                </div>
                <div  className = "image">
                    <Img data-aos="fade-left"
                        src = {imgpaty}
                        alt = "imagem patricia"/>
                </div>
            </StyledAbout>
            <Curly/>
            </div>
        </>
    );
};

const StyledAbout = styled.div`
    height: 95vh;
    margin-top: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 10vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 11rem;
    }
    
@media (max-width: 480px){
    padding: 1rem;
    text-align: center;
    margin-top: 9rem;
    
    } 
`
const HI = styled.h2 `
    font-weight: 900;
    font-size: 3.5rem;
    color: purple;; 
    font-family: 'Lato', sans-serif;
`
const P = styled.p`
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: 600;
    padding-right: 10rem;
    font-family: 'Montserrat', sans-serif;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    font-family: 'Lato', sans-serif;
`
const StyledA = styled.a `
    color: whitesmoke;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`
const Img = styled.img`
    width: 40vh;
    height: 40vh;
    margin-right: 5rem;
    position: relative;
    border-radius: 50%; 
    overflow: hidden;
    object-fit: cover;
    box-shadow: 1px 3px 32px -4px black;
    @media (max-width: 1024px){
        width: 20vh;
        height: 20vh;
    } 
@media (max-width: 768px){
    display: none;
    } 
@media (max-width: 480px){
    display: none; 
    }
`
const BigText = styled.div `
    /* overflow: hidden; */
   color: linear-gradient(to top, #c71d6f 0%, #d09693 100%);
`
export default AboutSection;





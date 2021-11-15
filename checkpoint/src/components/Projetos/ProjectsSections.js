import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentCard from '../Projetos/Content'
import Card from '../Projetos/Card'

const ProjectsSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            
            <H2>Projetos</H2>
                <ProjectContainer className = "cards" id="projects" > 
                    {contentCard.map((item) => (
                    <Card key={item.id} item={item}/>
                    ))}
                </ProjectContainer>
        </>
    )
}

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    justify-content: center;
    margin: 3rem;
    @media (max-width: 768px){
        grid-template-columns: auto;
        margin: 2rem;
    }
`

const H2 = styled.h2`
    font-weight: 600;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 1em;
    margin-top: 1em;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 2vh;
        margin-bottom: 2vh;
        font-size: 1rem;
    }  
`

export default ProjectsSection;
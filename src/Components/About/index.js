import React from 'react';
import { AboutSection, AboutInfo, InfoTitle, Span, InfoDir , InfoDesc, Anchor} from './style';


const About = () => {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>C'est</Span> Moi</InfoTitle>
                    <InfoDir>Directeur De Création</InfoDir>
                    <InfoDesc>
                    Je suis développeur web front & back <Anchor href="#">pour plus d'info</Anchor>
                    </InfoDesc>
                    <InfoDesc>
                    - Conception et développement d'applications
                    </InfoDesc>
                    <InfoDesc>
                    - Intégration et tests / Agile (Scrum/Kanban)
                    </InfoDesc>
                    <InfoDesc>
                    - Analyse et interprétation de spécifications techniques et fonctionnelles
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    );
}


export default About;

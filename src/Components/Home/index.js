import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeBtn, Span } from "./style";

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>AMRI</HomeTitle>
                    <HomeInfo>Directeur De Création</HomeInfo>
                    <HomeDesc>
                    Je suis développeur <Span>Back-End</Span> & <Span>Font-End</Span>, créer des conceptions modernes et réactives pour le Web et le mobile. travaillons ensemble. Je vous remercie.
                    </HomeDesc>
                    <HomeBtn>Let's begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}




export default Home;

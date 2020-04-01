import React , {useState, useEffect} from 'react';
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan  } from "./style";
import axios from "axios";
const Portfolio = () => {
    
    
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio)})
    }, []);
    const PortfolioImages = images.map((imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Afficher l'image
                        </OverlaySpan>
                    </Overlay>
            </ImageWrapper> 
        );
    });

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>Mon</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>Tout</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                             {PortfolioImages} 
                
            </div>
            
        </PortfolioSection>
    );
}


export default Portfolio;

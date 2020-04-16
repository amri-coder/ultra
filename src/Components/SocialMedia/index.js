import React from 'react';
import { SocialMedia } from "./style";

const SocialMedia = () => {
    return (
        <SocialMedia>
            
                <div className="social face">
                    <i className="icon fa fa-facebook fa-lg"></i>
                    <p>
                        <span className="info1">Suivez-moi sur </span>
                        <span className="info2">Social Facebook</span>
                    </p>
                </div>
                
                <div className="social twitter">
                    <i className="icon fa fa-twitter fa-lg"></i>
                    <p>
                        <span className="info1">Suivez-moi sur </span>
                        <span className="info2">Social twitter</span>
                    </p>
                </div>
                
                <div className="social pin">
                    <i className="icon fa fa-pinterest fa-lg"></i>
                    <p>
                        <span className="info1">Épinglez-moi </span>
                        <span className="info2">Social Pinterest</span>
                    </p>
                </div>
    </SocialMedia>
    );
}




export default SocialMedia;

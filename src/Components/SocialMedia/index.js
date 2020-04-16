import React from 'react';


const SocialMedia = () => {
    return (
        <div className="social-media">
            
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
    </div>
    );
}




export default SocialMedia;

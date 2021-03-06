import React from "react";
import './style.css';

const Profile = () => {

    return (
        <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>Mon </span>Profil</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Nom</span>
                            AMRI Maher
                        </li>
                        <li className="profile-item">
                            <span>Date de naissance</span>
                            **/**/****
                        </li>
                        <li className="profile-item">
                            <span>Adresse</span>
                            France
                        </li>
                        <li className="profile-item">
                            <span>Tél</span>
                            (0033)(0)6.52.96.02.44
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            amri.maher@yahoo.com
                        </li>
                        <li className="profile-item">
                            <span>Github</span>
                            <span className="web">https://github.com/amri-coder</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Quelques <span>compétences</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div className="bar">
                        <span className="title">React</span>
                        <span className="perc">70%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">JavaScript</span>
                        <span className="perc">70%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">PHP</span>
                        <span className="perc">65%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>);

}

export default Profile;
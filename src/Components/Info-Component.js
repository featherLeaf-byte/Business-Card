import React from "react"
import AboutComponent from "./About-Component.js"
import FooterComponent from "./Footer-Component.js"

export default function InfoComponent(){
    return (    
        <div className="info-block">
            <div className="info-prof-pic"></div>
            <div className="info-text">
                <h1 className="info-name">Lusama Fatman</h1>
                <h2 className="info-job">Frontend Developer</h2>
                <h3 className="info-site">lusamafatman.website</h3>
                <div className="button-links">
                    <button className="btn btn-email"><i className="fas fa-envelope"></i> Email</button>
                    <button className="btn btn-linkedin"><i className="fab fa-linkedin"></i>  LinkedIn</button>
                </div>
                <AboutComponent/>  
            </div>
            <FooterComponent/>
        </div>
    )
}
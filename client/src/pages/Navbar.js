import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { faArrowRight, faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faMobileAlt, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <>
            {/*  */}
<div className="navbar_header">
    
<div className="section1" >
<div className="logo-agence">
        <img src="Travel-logo-design-Graphics-9786083-1-removebg-preview.png"alt="logo" /> 
    

     </div>
    <ul className="ul_section1" >
        <li className="nav-item">
            <a className="nav-link" href="mailto:client@traveltodo.com">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                {/* <img src="./email.png"  alt="email" title="email " className="img-fluid me-2"/> */}
                client@wecantravel.com
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/nos-agences/">
                <img src="./home.png" alt="Agence" title="Agences "className="img-fluid me-2"/>
                Nos agences
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href="/contact/">
                <img src="./email.png" alt="contact " title="contact "className="img-fluid me-2"/>
                Contact
            </a>
        </li>

        <li className="nav-item">
            <button className="btn-connect">
                
            <Link to="/login">
                {/* <img  src="./userlogin.png" alt="connecter " title="connecter"/> */}
              <span id="seconnecter"> Login</span>
            </Link>
            </button>
        </li>
    </ul>
    
        
</div>

                <div className="navbar_container">
                    <div className="navbar_elements">
                        <ul className="navbar_elementsul">
                            <Link to='/'><li><h5>Accueil</h5></li></Link>
                            <Link to='/about'><li>
                            <h5>About</h5>
                           </li></Link>
                           <Link to='/discover'><li><h5>Discover</h5></li></Link> 

                            <li id="listTunisie"> <h5>Séjour en Tunisie </h5>
                                <div className="dropDown">
                                    <div className="dropDownRight">Hotel
                                        <li><Link> tunis</Link></li>
                                        <li>tunis</li>
                                        <li>tunis</li>
                                        <li>tunis</li>
                                    </div>
                                    <div>Maison d'hotes
                                        <li>tunis</li>
                                        <li>tunis</li>
                                        <li>tunis</li>
                                        <li>tunis</li>
                                    </div>
                                </div>
          </li>
          <Link to="/voyage">   <li>
                                <h5>
                                Voyages à l'étranger</h5></li></Link>
                            <li><h5>Telephone</h5></li>
                        </ul>
                    </div>
                </div>

            </div>
           
            
           
            
           
        </>
    );
};

export default Navbar;

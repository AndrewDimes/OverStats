import React from 'react';


import { Link } from 'react-router-dom';



export default function HomePage() {
    return (
        <div>
        <div id="main" className="ui vertically divided grid">
            <div id='non-mobile-tablet' className="row">
                <div id="left-side" className="blue eight wide column BigLogo">

                    <div className="BigLogo-content">
                        <img className="ow" src="../../retry.png"></img><br></br>

                    </div>

                </div>
                <div style={{ background: 'fixed' }} id="sidebar" className="eight wide column LandingMessage container">
                    <div id="right-items" className="content">
                        <h1 className="title">0verStats</h1>
                        <span className="subtitle"><h4>Overwatch statistics made easy. Developed with MongoDB, Express, React & Node</h4></span><br></br>
                        <div id="buttons" className="row">
                            <Link to='/login'><button id="button" className="ui blue button">Log In</button></Link>
                            <Link to='/signup'><button id="button" className="ui grey button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='mobile-tablet' className="row">
                <div style={{ background: 'fixed' }} id="sidebar" className="sixteen wide column LandingMessage container">
                    <div id="right-items" className="mobile-content">
                        <h1 className="title">0verStats</h1>
                        <span className="subtitle"><h4>Overwatch statistics made easy. Developed with MongoDB, Express, React & Node</h4></span><br></br>
                        <div id="buttons" className="row">
                            <Link to='/login'><button id="button" className="ui blue button">Log In</button></Link>
                            <Link to='/signup'><button id="button" className="ui grey button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )

}
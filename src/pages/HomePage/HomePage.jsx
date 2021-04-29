import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';

import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function HomePage() {
    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="left-side"  className="blue eight wide column BigLogo">

                    <div className="BigLogo-content">
                    <img className="ow" src="../../retry.png"></img><br></br> 

                    </div>

                </div>
                <div style={{background:'fixed'}}id="sidebar" className="eight wide column LandingMessage">
                    <div id="right-items" className="content">
                        <h1 className="title">OverStats</h1>
                        <span className="subtitle"><h4>Overwatch statistics made easy. Developed with MongoDB, Express, React & Node</h4></span><br></br>
                        <div id="buttons" className="row">
                            <Link to='/login'><button id="button" className="ui blue button">Log In</button></Link>
                            <Link to='/signup'><button id="button" className="ui grey button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

}
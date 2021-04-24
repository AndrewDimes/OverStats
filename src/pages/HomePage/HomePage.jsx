import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function HomePage() {
    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div className="blue eight wide column BigLogo">
                    <div className="BigLogo-content">
                        <h1>Join now to get started</h1>
                    </div>

                </div>
                <div className="grey eight wide column LandingMessage">
                    <div className="content">
                        <h1 className="title">statMap.Overwatch</h1>
                        <span className="subtitle">statMap is the resource for viewing your up to date Overwatch stats</span>
                        <div id="buttons" className="row">
                            <button className="landing-button">Log In</button>
                            <button className="landing-button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

}
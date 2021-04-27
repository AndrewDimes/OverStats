import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import BarChart from '../../components/BarChart/BarChart'



export default function ProfilePage({ handleLogOut, user, profileData }) {



    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="sidebar" className="three wide column">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>

                </div>
                <div className="blue thirteen wide column">
                    <div className="content">
                        {Object.keys(profileData).length ? <ProfileInfo profileData={profileData} user={user} /> : <div class="ui massive active centered inline loader"></div> }
                        
                     
                    </div>
                </div>
            </div>
        </div>
    )

}
import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function SearchPage({handleLogOut, user}) {
    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="sidebar" className="three wide column BigLogo">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>

                </div>
                <div className="blue thirteen wide column LandingMessage">
                    <div className="content">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </div>
        )

}
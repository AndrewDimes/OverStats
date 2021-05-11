import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import { Button, Form, Message } from 'semantic-ui-react'



export default function Dashboard({ handleLogOut, user }) {




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
                        <Message style={{width: '100%', backgroundColor: 'rgb(0,103,164)' }}>
        <div class="ui massive horizontal divided list">
  <div class="item">
    <img style={{}} class="ui avatar image" src={user.photoUrl}></img>
    <div class="content">
      <div class="header" style={{}}>{user.username}</div>
    </div>
  </div>
  </div>
  </Message>
  <Message></Message>
                    </div>
                </div>
            </div>
        </div>
    )

}
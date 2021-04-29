import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function NavBar({ handleLogOut, user, onClick}) {
  console.log(user.photoUrl)
  return (
    <>

      <Grid id="nav-bar" className="nav">
        <Grid.Row>
          <Grid.Column >
          <h1 className="title">OverStats</h1> 
            <img className="ow" src="../../retry.png"></img>
            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/profile"><button id="nav-btn" className="grey massive ui button">Profile</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/search" ><button onClick={onClick}  id="nav-btn" className="grey massive ui button">Search</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/" onClick={handleLogOut}><button  id="nav-btn" className="grey massive ui button">Logout</button></Link></Grid.Column>
        </Grid.Row>

      </Grid>

    </>
  )
}

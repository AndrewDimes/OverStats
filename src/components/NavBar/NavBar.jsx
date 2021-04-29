import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function NavBar({ handleLogOut, user}) {
  console.log(user.photoUrl)
  return (
    <>

      <Grid id="nav-bar" className="nav">
        <Grid.Row>
          <Grid.Column >
            <img className="ow" src="../../ow.png"></img><br></br> 
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/profile"><button style={{color:'rgb(67,66,65)'}}id="nav-btn" className="yellow massive ui button">Profile</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/search" ><button style={{color:'rgb(67,66,65)'}} id="nav-btn" className="yellow massive ui button">Search</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/" onClick={handleLogOut}><button style={{color:'rgb(67,66,65)'}} id="nav-btn" className="yellow massive ui button">Logout</button></Link></Grid.Column>
        </Grid.Row>

      </Grid>

    </>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import { Button, Form, Message } from 'semantic-ui-react'

export default function NavBar({ handleLogOut, user, onClick }) {
  console.log(user)
  return (
    <>
      <Grid id="nav-bar" className="nav">
        <Grid.Row>
          <Grid.Column >
            <h1 className="nav-title">0verStats</h1>
            <img className="nav-ow" src="../../retry.png"></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/profile"><button id="nav-btn" className="grey massive ui button">Profile</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/search" ><button onClick={onClick} id="nav-btn" className="grey massive ui button">Search</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row className="menu-item">
          <Grid.Column><Link to="/" onClick={handleLogOut}><button id="nav-btn" className="grey massive ui button">Logout</button></Link></Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid id="mobile-nav-bar">
        <Grid.Row >
          <Grid.Column><Link to="/profile"><button id="mobile-nav" className="grey tiny ui button">Profile</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Link to="/search" ><button id="mobile-nav" onClick={onClick}  className="grey tiny ui button">Search</button></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column><Link to="/" onClick={handleLogOut}><button id="mobile-nav"  className="grey tiny ui button">Logout</button></Link></Grid.Column>
        </Grid.Row>
              
      </Grid>

    </>
  )
}

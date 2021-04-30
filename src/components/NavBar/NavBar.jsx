import React from 'react';
import { Link } from 'react-router-dom';
import {Grid} from 'semantic-ui-react'


export default function NavBar({ handleLogOut, user, onClick}) {
  return (
    <>
      <Grid id="nav-bar" className="nav">
        <Grid.Row>
          <Grid.Column >
          <h1 className="nav-title">OverStats</h1> 
            <img className="nav-ow" src="../../retry.png"></img>
            
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

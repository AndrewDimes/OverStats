import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function NavBar({handleLogOut, user}) {
    return (

        <Grid className="nav">
          <Grid.Row>
          <Grid.Column >
          <img className="ui avatar image" src={user.photoUrl ? user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}></img>
          <span>{user.username}</span> 
          </Grid.Column>
          </Grid.Row>
        <Grid.Row>
          <Grid.Column><Link to="/profile"><h1>Profile</h1></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Link to="/search"><h1>Search</h1></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Link to="/" onClick={handleLogOut}><h1>Logout</h1></Link></Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

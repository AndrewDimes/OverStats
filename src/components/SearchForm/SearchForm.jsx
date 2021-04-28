import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'





export default function ProfileInfo({handleChange, handleSubmit, state, error, edit}) {
    
    return (
        

<Form id="search-form"className="signup-form" autoComplete="off" onSubmit={handleSubmit}>
    {edit ? <Message style={{backgroundColor:'grey'}}><h1>Edit Profile</h1></Message> : <Message style={{backgroundColor:'grey'}}><h1>Search</h1></Message>}
        <Form.Input
            name="battletag"
            placeholder="battletag"
            value={state.battletag}
            onChange={handleChange}
            required
        />
        <Form.Input
            name="platform"
            placeholder="Platform(PC, XBL, PSN) "
            value={state.platform}
            onChange={handleChange}
            required
        />
        <Form.Input
            name="region"
            placeholder="Region(US, EU, ASIA) "
            value={state.region}
            onChange={handleChange}
            required
        />
       {edit ? <Button
            color='green'
            type="submit"
            className="btn"
            disabled=""
        >
             Edit
  </Button> : <Button
            color='green'
            type="submit"
            className="btn"
            disabled=""
        >
             Search
  </Button>
}
 
  {error ? <Message style={{ backgroundColor: 'grey', color: ' .red'}}> <b>{error}</b>  </Message> : null}
 
    </Form>


     



    )
}
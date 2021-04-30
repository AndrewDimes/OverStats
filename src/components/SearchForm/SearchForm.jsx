import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'





export default function ProfileInfo({ handleChange, handleSubmit, state, error, edit }) {
    const options = [
        {  key: 'pc', text: 'PC', value: 'pc' },
        {  key: 'xbl', text: 'XBL', value: 'xbl' },
        {  key: 'psn', text: 'PSN', value: 'psn' },
    ]
    const optionsTwo = [
        {  text: 'US', value: 'us' },
        {  text: 'EU', value: 'eu' },
        {  text: 'ASIA', value: 'asia' },
    ]

    return (


        <Form id="search-form" className="signup-form" autoComplete="off" onSubmit={handleSubmit}>
            {edit ? <Message style={{ backgroundColor: 'rgb(0,103,164)' }}><h1 style={{color:'white'}}>Edit Profile</h1></Message> : <Message style={{ backgroundColor: 'rgb(0,103,164)' }}><h1 style={{color:'white'}}>Search</h1></Message>}
            <Form.Input
                name="battletag"
                placeholder="PlayerName or Battletag#1234"
                value={state.battletag}
                onChange={handleChange}
                required
            />
            <Form.Select
                fluid
                key="platform"
                name="platform"
                options={options}
                onChange={handleChange}
                placeholder='Platform'
            />
            <Form.Select
                fluid
                name="region"
                options={optionsTwo}
                onChange={handleChange}
                placeholder='Region'
            />
            {edit ? <Message style={{ backgroundColor: 'rgb(0,103,164)'}}> <Link to='/delete'><b style={{color: ' red' }}>Delete Profile</b></Link>  </Message> : null }
            {error ? <Message style={{ backgroundColor: 'rgb(0,103,164)', color: 'red' }}> <b>{error}</b>  </Message> : null}

            {edit ? <Button
                color=''
                type="submit"
                className="btn"
               
            >
                Edit
  </Button> : <Button
                color=''
                type="submit"
                className="btn"
                disabled=""
            >
                Search
  </Button>
            }


        </Form>






    )
}
import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Message } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';


export default function SignUpPage(props) {
    const [invalidForm, setValidForm] = useState(false)
    const [error, setError] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        battletag: '',
        platform: '',
        region: ''
    });

    const history = useHistory()


    function handleChange(e) {
        console.log(e.target.key)
        let name;
        if (e.target.textContent === 'PC' || e.target.textContent === 'XBL' || e.target.textContent === 'PSN') {
            name = "platform"
        }
        if (e.target.textContent === 'US' || e.target.textContent === 'EU' || e.target.textContent === 'ASIA') {
            name = "region"
        }

        if (e.target.name) {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
        } else {
            setState({
                ...state,
                [name]: e.target.textContent
            })
        }

    }
    async function handleSubmit(e) {
        // add this later
        e.preventDefault();

        // Photos have to be sent over as FormData
        // They send over the form in multiparts (multipe requests to the server)

        const formData = new FormData();
        formData.append('photo', selectedFile);


        // generating rest of form data by looping over the state object!
        for (let key in state) {
            formData.append(key, state[key])
        }
        //fyi if you log out formData you won't see anything you have to use the folllowing

        // Display the key/value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }

        // SO now we have are data prepared to send over in our formData object
        try {
            // refere to the utils/userService, to look at the signup fetch function
            await userService.signup(formData);
            // setTheUser in our app
            props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
            // with the correct user object from the current token
            // then route to the homepage
            history.push('/profile') // defined above from react-router-dom
            // after this we can go whereever

        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }

    }
    function handleFileInput(e) {
        setSelectedFile(e.target.files[0])
    }
    const options = [
        { key: 'pc', text: 'PC', value: 'pc' },
        { key: 'xbl', text: 'XBL', value: 'xbl' },
        { key: 'psn', text: 'PSN', value: 'psn' },
    ]
    const optionsTwo = [
        { text: 'US', value: 'us' },
        { text: 'EU', value: 'eu' },
        { text: 'ASIA', value: 'asia' },
    ]

    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="signup-left" className="blue eight wide column BigLogo">
                    <div className="BigLogo-content">
                        <img className="ow" src="../../retry.png"></img><br></br>                    </div>

                </div>
                <div id="sidebar" className=" eight wide column LandingMessage">
                    <div id="right-items" className="content">
                        <h1 className="signup-title">Sign Up</h1>

                        <Form className="signup-form" autoComplete="off" onSubmit={handleSubmit}>

                            <Form.Input
                                name="username"
                                placeholder="username"
                                value={state.username}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                name="battletag"
                                placeholder="battletag"
                                value={state.battletag}
                                onChange={handleChange}
                                
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
                            <Form.Input
                                name="password"
                                type="password"
                                placeholder="password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                name="passwordConf"
                                type="password"
                                placeholder="Confirm Password"
                                value={state.passwordConf}
                                onChange={handleChange}
                                required
                            />
                            <Form.Field>
                                <Form.Input
                                    type="file"
                                    name="photo"
                                    placeholder="upload image"
                                    onChange={handleFileInput}
                                />
                            </Form.Field>
                            <Button
                                color='blue'

                                type="submit"
                                className="btn"
                                disabled={invalidForm}
                            >
                                Signup
                      </Button>

                            <Message>
                                Already have an account? <Link to='/login'>Log In</Link>
                            </Message>
                            {error ? <ErrorMessage error={error} /> : null}
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )

}

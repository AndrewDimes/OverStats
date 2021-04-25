import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function LoginPage(props) {
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }



    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await userService.login(state);
            // Route to wherever you want!
            props.handleSignUpOrLogin()
            history.push('/profile')

        } catch (err) {
            // Invalid user data (probably duplicate email)
            setError(err.message)
        }
    }
    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div className="blue eight wide column BigLogo">
                    <div className="BigLogo-content">
                        <h1>Join now to get started</h1>
                    </div>

                </div>
                <div id="sidebar"className=" eight wide column LandingMessage">
                    <div className="content">
                        <h1 className="title">Log In</h1>
                        <Form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
                            
                                <Form.Input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={state.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    value={state.password}
                                    onChange={handleChange}
                                    required
                                />
                                <Button
                                    color='blue'
                                    fluid size='large'
                                    type="submit"
                                    className="btn"
                                    disabled={invalidForm}
                                >
                                    Login
                </Button>
                            
                            <Message>
                                New to us? <Link to='/signup'>Sign Up</Link>
                            </Message>
                            {error ? <ErrorMessage error={error} /> : null}
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}


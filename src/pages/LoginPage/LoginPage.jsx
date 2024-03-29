import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'


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
            props.handleSignUpOrLogin()
            history.push('/profile')

        } catch (err) {
            // Invalid user data (probably duplicate email)
            setError(err.message)
        }
    }
    return (
        <div id="main" className="ui vertically divided grid">
            <div id='non-mobile-tablet' className="row">
                <div className="blue eight wide column BigLogo">
                    <div className="BigLogo-content">
                        <img className="ow" src="../../retry.png"></img><br></br>                    </div>

                </div>
                <div id="sidebar" className=" eight wide column LandingMessage">
                    <div id="right-items" className="content">

                        <h1 className="login-title">Log In</h1>
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
                            <Message className="test-msg">For testing purposes: <br></br>Email - tester@email.com<br></br>Password - tester</Message>

                        </Form>

                    </div>
                </div>
            </div>
            <div id='mobile-tablet' className="row">
                <div id="sidebar" className=" sixteen wide column LandingMessage">
                    <div id="right-items" className="mobile-content">

                        <h1 className="login-title">Log In</h1>
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
                            <Message className="test-msg">For testing purposes: <br></br>Email - test@mail.com<br></br>Password - tester</Message>

                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}


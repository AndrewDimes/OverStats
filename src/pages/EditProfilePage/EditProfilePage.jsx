import React, { useState } from 'react';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useHistory } from 'react-router-dom';


export default function EditProfilePage({ user, handleLogOut, handleSignUpOrLogin }) {
    const [error, setError] = useState('')

    //this updates with the users input
    const [state, setState] = useState({
        battletag: user.battletag,
        platform: user.platform,
        region: user.region

    });

    const history = useHistory();

    async function editProfile() {
        try {
            const data = await userService.edit(state, user._id); /// sending over new user information
            console.log(data, 'in editprofile after userService.edit')
            handleSignUpOrLogin()
            history.push('/profile')
        } catch (err) {
            console.log(err)
        }
    }
    function handleSubmit() {
        let p = state.battletag.replace('#', '-')
        //checking to make sure the new user information is valid in the API otherwise send invalid to user
        const makeApiCall = () => {
            fetch(`https://ow-api.com/v1/stats/${state.platform}/${state.region}/${p}/complete`)
                .then((res) => res.json())
                .catch(function () {

                })
                .then((data) => {
                    if (data.error) {
                        setError('Invalid Entry')
                    } else if (data) {
                        console.log('did work')
                        editProfile()

                    } else {
                        setError('Invalid Entry')
                    }
                });
        };
        makeApiCall();
    }

    //update state
    function handleChange(e) {

        ///getting the name key for state
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

    return (
        <div id="main" className="ui vertically divided grid">
            <div id='non-mobile-tablet-profile' className="row">
                <div id="sidebar" className="three wide column BigLogo">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>
                </div>
                <div className="blue thirteen wide column LandingMessage">
                    <div className="content">
                        <SearchForm error={error} handleSubmit={handleSubmit} edit={true} state={state} handleChange={handleChange} />
                    </div>
                </div>
            </div>
            <div id='mobile-tablet-profile' className="row">
                <div className="blue sixteen wide column LandingMessage">
                    <div className="content">
                        <SearchForm error={error} handleSubmit={handleSubmit} edit={true} state={state} handleChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    )

}
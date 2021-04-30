import React from 'react';
import userService from '../../utils/userService';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';



export default function DeletePage({ handleLogOut, user }) {

    async function handleClick() {
        console.log('pew', user)
        userService.deleteUser(user)
        handleLogOut()

    }


    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="sidebar" className="three wide column BigLogo">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>
                </div>
                <div id="del-page" className="blue thirteen wide column LandingMessage">
                    <div id="del-buttons" className="content">
                        <h1 >Are you sure you want to delete your account?<br></br> </h1>
                        <Link to='/'><button id="del-button" onClick={handleClick} className="ui red button">Yes</button></Link>
                        <Link to='/profile'><button id="del-button" className="ui grey button">No </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

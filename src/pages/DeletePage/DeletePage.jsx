import React, {useState} from 'react';
import userService from '../../utils/userService';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';



export default function DeletePage({ handleLogOut, user }) {
    // if the user is tester hide delete buttons
    let tester;
    if(user.username === 'tester'){
        tester = true;
    }
   

    async function handleClick() {
        userService.deleteUser(user) // this will delete the user from the database
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
                 
                        {tester ? 
                        <>
                        <h1 >You can not delete tester account.<br></br></h1> 
                        <Link to='/profile'><button id="back-button" className="ui grey button"> Get me out of here  </button></Link>
                        </>
                        : 
<>
                        <h1 >Are you sure you want to delete your account?<br></br> </h1> 
                        <Link to='/'><button id="del-button" onClick={handleClick} className="ui red button">Yes</button></Link>
                        <Link to='/profile'><button id="del-button" className="ui grey button">No </button></Link>
                        </>
}
                        
                    

                    </div>
                </div>
            </div>
        </div>
    )
}

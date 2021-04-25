import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import SearchPage from '../SearchPage/SearchPage';
import userService from '../../utils/userService'
import * as d3 from 'd3'


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [profileData, setProfileData] = useState({})
  const [error, setError] = useState('')
  const [apiLink, setApiLink] = useState('')
  function handleSignUpOrLogin() {
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogOut() {
    userService.logout();
    setUser({ user: null })
  }
  
  useEffect(() => {
    if(user){
      let p = user.battletag.replace('#', '-')
      console.log(p)
      setApiLink(`https://ow-api.com/v1/stats/${user.platform}/${user.region}/${p}/profile`)
    }


      const makeApiCall = () => {
          fetch(apiLink)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setProfileData(data)
          });

      };
      makeApiCall();
    
  }, [apiLink])
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>

        {userService.getUser() ? 
        <Switch>
        <Route exact path='/profile'>
          <ProfilePage profileData={profileData} user={user} handleLogOut={handleLogOut} />
        </Route>
        <Route exact path="/search">
          <SearchPage user={user} handleLogOut={handleLogOut} />
        </Route>
        </Switch>
        :
        <Redirect to='/login'/>
}


      </Switch>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import SearchPage from '../SearchPage/SearchPage';
import DeletePage from '../DeletePage/DeletePage';
import userService from '../../utils/userService'



function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [error, setError] = useState('')


  function handleSignUpOrLogin() {
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogOut() {
    userService.logout();
    setUser({ user: null })
  }




  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/edit">
          <EditProfilePage handleSignUpOrLogin={handleSignUpOrLogin} user={user} handleLogOut={handleLogOut} />
        </Route>
        <Route exact path="/delete">
          <DeletePage handleSignUpOrLogin={handleSignUpOrLogin} user={user} handleLogOut={handleLogOut} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>

        {userService.getUser() ?
          <Switch>
            <Route exact path='/profile'>
              <ProfilePage setUser={setUser} user={user} handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/search">
              <SearchPage user={user} handleLogOut={handleLogOut} />
            </Route>
          </Switch>
          :
          <Redirect to='/login' />
        }


      </Switch>
    </div>
  );
}

export default App;

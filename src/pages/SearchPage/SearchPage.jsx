import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default function SearchPage({ handleLogOut, user }) {

    const [invalidForm, setValidForm] = useState(false)
    const [error, setError] = useState('')
    const [apiLink, setApiLink] = useState(``)
    const [searchData, setSearchData] = useState({})
    const [ready, setReady] = useState(false)
    const [state, setState] = useState({
        battletag: '',
        platform: '',
        region: ''
    });

    const history = useHistory()

    function getError(errorMsg){
        setError(errorMsg)
    }
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit() {
        let p = state.battletag.replace('#', '-')
        setApiLink(`https://ow-api.com/v1/stats/${state.platform}/${state.region}/${p}/complete`)

    }

    useEffect(() => {
          function makeApiCall() {
            fetch(apiLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'here')
                setSearchData(data)
                console.log(searchData)
                setReady(true)
          });
          };
          makeApiCall();
        
      }, [apiLink])


    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
                <div id="sidebar" className="three wide column BigLogo">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>
                </div>
                <div className="grey thirteen wide column LandingMessage">
                    <div  className="content">

                    {ready ? <ProfileInfo name={state.battletag} profileData={searchData} user={user} /> : <SearchForm error={error} state={state} handleChange={handleChange} handleSubmit={handleSubmit} />}
                    {error}
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'



export default function SearchPage({ handleLogOut, user }) {


    const [error, setError] = useState('')
    const [apiLink, setApiLink] = useState(``)
    const [searchData, setSearchData] = useState({})
    const [ready, setReady] = useState(false)

    //this updates with the users input
    const [state, setState] = useState({
        battletag: '',
        platform: '',
        region: ''
    });

    // this updates state
    function handleChange(e) {
        //getting name keys for dropdowns
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

    //updating api link to fetch after user input
    async function handleSubmit() {
        let p = state.battletag.replace('#', '-')
        let platform = state.platform.toLowerCase()
        let region = state.region.toLowerCase()
        setApiLink(`https://ow-api.com/v1/stats/${platform}/${region}/${p}/complete`)

    }

    useEffect(() => {
        function makeApiCall() {
            fetch(apiLink) // calling api to retrieve player data
                .then((res) => res.json())
                .then((data) => {
                    setSearchData(data)
                    if (data.error) {
                        setReady(false) /// if fetch fails from invalid input set to false to keep search form shown on page
                        setError(data.error)
                    } else {
                        setReady(true)
                    }

                })
                .catch((err) => console.log(err))
        };
        if (apiLink !== '') {
            makeApiCall();
        }

    }, [apiLink])

    //this will be set true when fetch is successful. It will then show profileinfo componenent and hide searchform
    function onClick() {
        ready ? setReady(false) : setReady(true)
    }

    //refresh page when ready changes from true to false or false to true
    useEffect(() => {


    }, [ready])


    return (
        <div id="main" className="ui vertically divided grid">
            <div id='non-mobile-tablet-profile' className="row">
                <div id="sidebar" className="three wide column BigLogo">
                    <div className="BigLogo-content">
                        <NavBar onClick={onClick} user={user} handleLogOut={handleLogOut} />
                    </div>
                </div>
                <div className="blue thirteen wide column LandingMessage">
                    
                    <div className="content">
                        {ready ? <ProfileInfo profile={false} name={state.battletag} profileData={searchData} user={user} /> : <SearchForm error={error} state={state} handleChange={handleChange} handleSubmit={handleSubmit} />}
                    </div>
                </div>
            </div>
            <div id='mobile-tablet-profile' className="row">
                <div  id='mobile-content' className="blue sixteen wide column">
                    <br />
                <MobileNavBar className="mobile-nav-buttons" user={user} handleLogOut={handleLogOut} />
                    <div className="content">
                        {ready ? <ProfileInfo profile={false} name={state.battletag} profileData={searchData} user={user} /> : <SearchForm error={error} state={state} handleChange={handleChange} handleSubmit={handleSubmit} />}
                    </div>
                </div>
            </div>
        </div>
    )

}
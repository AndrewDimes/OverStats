import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'



export default function SearchPage({ handleLogOut, user }) {


    const [error, setError] = useState('')
    const [apiLink, setApiLink] = useState(``)
    const [searchData, setSearchData] = useState({})
    const [ready, setReady] = useState(false)
    const [state, setState] = useState({
        battletag: '',
        platform: '',
        region: ''
    });


    function handleChange(e) {
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
    async function handleSubmit() {
        let p = state.battletag.replace('#', '-')
        let platform = state.platform.toLowerCase()
        let region = state.region.toLowerCase()
        setApiLink(`https://ow-api.com/v1/stats/${platform}/${region}/${p}/complete`)

    }

    useEffect(() => {
        function makeApiCall() {
            fetch(apiLink)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, 'here')
                    setSearchData(data)
                    console.log(searchData, 'herrreeee')
                    if (data.error) {
                        setReady(false)
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

    function onClick() {
        ready ? setReady(false) : setReady(true)
    }
    useEffect(() => {


    }, [ready])


    return (
        <div id="main" className="ui vertically divided grid">
            <div className="row">
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
        </div>
    )

}
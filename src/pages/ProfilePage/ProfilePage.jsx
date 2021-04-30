import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'



export default function ProfilePage({ handleLogOut, user }) {
    const [apiLink, setApiLink] = useState('')
    const [profileData, setProfileData] = useState({})
    const makeApiCall = () => {
        fetch(apiLink)
    
            .then((res) => res.json())
            .then((data) => {
                setProfileData(data)
            })
            .catch((err) => console.log(err))
        }
        
    useEffect(() => {
        if (user) {
            let p = user.battletag.replace('#', '-')
            let region = user.region.toLowerCase()
            let platform = user.platform.toLowerCase()

            setApiLink(`https://ow-api.com/v1/stats/${platform}/${region}/${p}/complete`)
        }



        
        if(apiLink !== ''){
            makeApiCall();

        }
        

    }, [apiLink])


    return (


        <div className="ui vertically divided grid">
            <div className="row">
                <div id="sidebar" className=" three wide column">
                    <div className="BigLogo-content">
                        <NavBar user={user} handleLogOut={handleLogOut} />
                    </div>
                </div>
                {profileData.competitiveStats ?
                    <div className="blue thirteen wide column">
                        <div className="content">
                            {Object.keys(profileData).length ? <ProfileInfo profile={true} profileData={profileData} user={user} /> : <div className="ui massive active centered inline loader"></div>}
                        </div>
                    </div>
                    :
                    <div className="blue thirteen wide column">
                        <div id="edit-msg" className="content">
                            <h1 >This is your profile page.<br></br> Please enter a valid battletag <Link to="/edit" style={{color:'gold'}}>here</Link> </h1>
                        </div>
                    </div>
}

            </div>
        </div>

    )

}
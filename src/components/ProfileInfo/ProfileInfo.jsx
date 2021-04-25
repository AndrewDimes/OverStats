import React, { Component, useState, useEffect} from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import BarChart from '../../components/BarChart/BarChart'
import * as d3 from 'd3'


export default function ProfileInfo({user, profileData, winRatio}) {
    return (

        
  

        <div className="chart" >
<h1>{user.battletag}</h1>
<h1>Competetive</h1>
<BarChart profileData={profileData} winRatio={winRatio}/>
        </div>

    )
}
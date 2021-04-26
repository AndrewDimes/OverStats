import React, { Component, useState, useEffect} from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import BarChart from '../../components/BarChart/BarChart'
import Graph from '../../components/Graph/Graph';
import * as d3 from 'd3'


export default function ProfileInfo({user, profileData}) {
  const [stats, setStats] = useState(profileData.competitiveStats)
  const [mode, setMode] = useState('Competitive')
  const [winRatio, setWinRatio] = useState(0)



  function changeQuick(){
    setStats(profileData.quickPlayStats)
    setMode('Quickplay')
  }
  function changeComp(){
    setStats(profileData.competitiveStats)
    setMode('Competitive')
  }

  useEffect(() => {
    const winRatioRaw = parseInt(stats.games.won)/parseInt(stats.games.played)

    const winSplit = winRatioRaw.toFixed(2).toString().split('.')
    setWinRatio(winSplit[1])
    
},[stats])

    return (

        
  <>

<div className="profile">
  <div class="ui two column very relaxed grid">
    <div class="column">
    <h2 class="ui header">
  <img src={profileData.icon}class="ui circular image"></img>
  {user.battletag}</h2>
  <div id="medals" class="ui statistics">
        <div class="statistic">
          <div class="value">
          <img  src={profileData.ratings[0].rankIcon}></img>
          </div>
          <div class="label">
            Tank
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          <img  src={profileData.ratings[1].rankIcon}></img>
          </div>
          <div class="label">
            Damage
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          <img  src={profileData.ratings[2].rankIcon}></img>
          </div>
          <div class="label">
            Support
          </div>
        </div>
      </div>
  <Graph stats={stats} profileData={profileData} winRatio={winRatio}/>
  <div id="medals" class="ui statistics">
        <div class="statistic">
          <div class="value">
            {stats.awards.medalsGold}
          </div>
          <div class="label">
            Gold Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {stats.awards.medalsSilver}
          </div>
          <div class="label">
            Silver Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {stats.awards.medalsBronze}
          </div>
          <div class="label">
            Bronze Medals
          </div>
        </div>
      </div>
    </div>
    <div class="column">
  
    <div className="chart" >

<div class="ui buttons">
<button class="ui button" onClick={changeQuick}>Quickplay</button>
<div class="or"></div>
<button class="ui positive button" onClick={changeComp}>Competitive</button>
</div>
<h1>{mode}</h1>
<BarChart stats={stats} profileData={profileData} winRatio={winRatio}/>
      </div>

    </div>
  </div>
  <div class="ui vertical divider">
  
  </div>
</div>

</>
    )
}
import React, { Component, useState, useEffect} from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import BarChart from '../../components/BarChart/BarChart'
import Graph from '../../components/Graph/Graph';
import * as d3 from 'd3'


export default function ProfileInfo({user, profileData, name}) {
  console.log(profileData)
  const [stats, setStats] = useState(profileData.competitiveStats)
  const [mode, setMode] = useState('Competitive')
  const [winRatio, setWinRatio] = useState(0)
  const [buttonQuick, setButtonQuick] = useState(false)
  const [buttonComp, setButtonComp] = useState(true)



  function changeQuick(){
    setStats(profileData.quickPlayStats)
    setMode('Quickplay')
    setButtonQuick(true)
    setButtonComp(false)
  }
  function changeComp(){
    setStats(profileData.competitiveStats)
    setMode('Competitive')
    setButtonQuick(false)
    setButtonComp(true)
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
  {name ? name : user.battletag}</h2>
  {profileData.ratings ? 
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
          <img  src={profileData.ratings ? profileData.ratings[1].rankIcon : null}></img>
          </div>
          <div class="label">
            Damage
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          <img  src={profileData.ratings ? profileData.ratings[2].rankIcon : null}></img>
          </div>
          <div class="label">
            Support
          </div>
        </div>
      </div>
      :
      <h1 style={{color:'black'}}>Unranked</h1>
  }
  {stats ? <Graph stats={stats} profileData={profileData} winRatio={winRatio}/> : "loading..."}
  <div id="medals" class="ui statistics">
        <div class="statistic">
          <div class="value">
            {stats ? stats.awards.medalsGold : null }
          </div>
          <div class="label">
            Gold Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {stats ? stats.awards.medalsSilver : null}
          </div>
          <div class="label">
            Silver Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {stats ? stats.awards.medalsBronze : null}
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
  
<button class={buttonQuick ? 'ui positive button' : 'ui button'} onClick={changeQuick}>Quickplay</button>
<div class="or"></div>
<button class={buttonComp ? 'ui positive button' : 'ui button'} onClick={changeComp}>Competitive</button>
</div>

<h1>{mode}</h1>

{stats ? <BarChart stats={stats} profileData={profileData} winRatio={winRatio}/> : "loading..."}
      </div>
      <table class="ui inverted grey table">
  <thead>
    <tr><th>Heroes</th>
    <th>Won</th>
    <th>Loss</th>
    <th>Win Rate</th>
    <th>K/D</th>
    <th>Avg Obj Time</th>
    <th>Avg Time On Fire</th>
    <th>Time Played</th>
  </tr></thead><tbody>
    <tr>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
  

    </tr>
    <tr>
    <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>
    <tr>
    <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
      <td>x</td>
    </tr>

  </tbody>
</table>

    </div>
  </div>
  <div class="ui vertical divider">
  
  </div>
</div>

</>
    )
}
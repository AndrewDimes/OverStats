import React, { Component, useState, useEffect} from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import BarChart from '../../components/BarChart/BarChart'
import * as d3 from 'd3'


export default function ProfileInfo({user, profileData, winRatio}) {
    return (

        
  <>

        <div className="chart" >
            <h2 class="ui header">
  <img src={profileData.icon}class="ui circular image"></img>
  {user.battletag}</h2>
  <div class="ui buttons">
  <button class="ui button">Quickplay</button>
  <div class="or"></div>
  <button class="ui positive button">Competitive</button>
</div>
<h1>Competetive</h1>
<BarChart profileData={profileData} winRatio={winRatio}/>
        </div>
        <div class="ui statistics">
        <div class="statistic">
          <div class="value">
            {profileData.competitiveStats.awards.medalsGold}
          </div>
          <div class="label">
            Gold Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {profileData.competitiveStats.awards.medalsSilver}
          </div>
          <div class="label">
            Silver Medals
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {profileData.competitiveStats.awards.medalsBronze}
          </div>
          <div class="label">
            Bronze Medals
          </div>
        </div>
      </div>
</>
    )
}
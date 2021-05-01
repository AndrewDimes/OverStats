
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import BarChart from '../../components/BarChart/BarChart'
import Graph from '../../components/Graph/Graph';
import HeroElimsGraph from '../HeroElimsGraph/HeroElimsGraph';
import HeroTimeGraph from '../HeroTimeGraph/HeroTimeGraph';
import DamageGraph from '../DamageGraph/DamageGraph'



export default function ProfileInfo({ user, profileData, name, profile }) {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const heroData = profileData.competitiveStats.careerStats ? profileData.competitiveStats.careerStats.ana : 'No Hero Data'
  const compRef = useRef(null);
  const isScroll = () => scrollToDiv(compRef);
  const [stats, setStats] = useState(profileData.competitiveStats)
  const [mode, setMode] = useState('Competitive')
  const [winRatio, setWinRatio] = useState(0)
  const [buttonQuick, setButtonQuick] = useState(false)
  const [buttonComp, setButtonComp] = useState(true)
  const [heroeStats, setHeroeStats] = useState(heroData)
  const [currentHero, setCurrentHero] = useState('All')

  function handleClick(heroeStats, heroName) {
    if (heroName === 'allHeroes') {
      heroName = 'All'
    }
    setCurrentHero(heroName.charAt(0).toUpperCase() + heroName.slice(1))
    setHeroeStats(heroeStats)
    scrollToDiv(compRef)
  }


  const heroesList = stats.careerStats ? Object.entries(stats.careerStats).map((key, value) => {
    let kills;
    let deaths;
    let kd;
    let allHeroes;
    key[1].combat.eliminations ? kills = key[1].combat.eliminations : kills = 0;
    key[1].combat.deaths ? deaths = key[1].combat.deaths : deaths = 0;
    kd = (kills / deaths).toFixed(2)
    if (key[0] === 'allHeroes') {
      allHeroes = 'All'
    } else {
      allHeroes = key[0].charAt(0).toUpperCase() + key[0].slice(1)
    }

    if (kills === 0) {
      kd = 0
    }
    if (kills === 0 && deaths === 0) {
      kd = 0
    }
    return (
      <tr className="table-hover" key={value} onClick={() => handleClick(key[1], key[0])}>
        <td><b>{allHeroes}</b></td>
        <td>{key[1].game.gamesWon ? key[1].game.gamesWon : 0}</td>
        <td>{key[1].game.gamesLost}</td>
        <td>{key[1].game.gamesWon ? (key[1].game.gamesWon / key[1].game.gamesPlayed).toFixed(2) : 0}</td>
        <td>{kd}</td>
        <td>{key[1].average.objectiveTimeAvgPer10Min ? key[1].average.objectiveTimeAvgPer10Min : 0}</td>
        <td>{key[1].average.timeSpentOnFireAvgPer10Min ? key[1].average.timeSpentOnFireAvgPer10Min : 0}</td>
        <td>{key[1].game.timePlayed ? key[1].game.timePlayed : 0}</td>
      </tr>
    );
  })
    : []





  function changeQuick() {
    setStats(profileData.quickPlayStats)
    setMode('Quickplay')
    setButtonQuick(true)
    setButtonComp(false)
  }
  function changeComp() {
    setStats(profileData.competitiveStats)
    setMode('Competitive')
    setButtonQuick(false)
    setButtonComp(true)
  }

  useEffect(() => {
    if (stats) {
      const winRatioRaw = parseInt(stats.games.won) / parseInt(stats.games.played)
      const winSplit = winRatioRaw.toFixed(2).toString().split('.')
      setWinRatio(winSplit[1])

    }


  }, [stats])

  return (


    <>

      <div style={{ width: '100%' }} className="profile">
        <div style={{ width: '100%' }} className="ui two column very relaxed grid">
          <div className="column">

            <div className="ui items">
              <div className="item">
                <a className="ui tiny image">
                  <img src={profileData.icon}></img>
                </a>
                <div id="profile-details" className="content">
                  <a className="header">{name ? name : user.battletag}</a>
                  <div className="description">
                    <p>{profile ? <Link style={{ color: 'gold' }} to="/edit">Edit Profile</Link> : null}</p>

                    {profileData.ratings ?
                      <div id="medals" className="ui statistics">
                        <div className="statistic">
                          <div className="value">
                            <img src={profileData.ratings[0].rankIcon}></img>

                          </div>
                          <div className="label">
                            Tank
          </div>
                        </div>
                        <div className="statistic">
                          <div className="value">
                            <img src={profileData.ratings ? profileData.ratings[1].rankIcon : null}></img>
                          </div>
                          <div className="label">
                            Damage
          </div>
                        </div>
                        <div className="statistic">
                          <div className="value">
                            <img src={profileData.ratings ? profileData.ratings[2].rankIcon : null}></img>
                          </div>
                          <div className="label">
                            Support
          </div>
                        </div>
                      </div>
                      :
                      <h1 className="hero-name" style={{ color: 'black' }}>Unranked</h1>
                    }
                    <div id="medals" className="ui statistics">
                      <div className="statistic">
                        <div className="value">
                          {stats.awards ? stats.awards.medalsGold : null}
                        </div>
                        <div className="label">
                          Gold Medals
          </div>
                      </div>
                      <div className="statistic">
                        <div className="value">
                          {stats.awards ? stats.awards.medalsSilver : null}
                        </div>
                        <div className="label">
                          Silver Medals
          </div>
                      </div>
                      <div className="statistic">
                        <div className="value">
                          {stats.awards ? stats.awards.medalsBronze : null}
                        </div>
                        <div className="label">
                          Bronze Medals
          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
      


            <h1 className="hero-name">{mode}</h1>
            <div className="profile-table">
              <table id="table" className="ui selectable inverted blue table">
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
                  {heroesList}
                </tbody>
              </table>
            </div>



          </div>
          <div className="column">

            <div className="chart" >

              <div className="ui buttons">

                <button className={buttonQuick ? 'ui positive button' : 'ui button'} onClick={changeQuick}>Quickplay</button>
                <div className="or"></div>
                <button className={buttonComp ? 'ui positive button' : 'ui button'} onClick={changeComp}>Competitive</button>
              </div><br></br><br></br>
              {stats.careerStats ? <BarChart stats={stats} heroe={false} profileData={profileData} winRatio={winRatio} /> : "loading..."}
              {stats.careerStats ? <Graph stats={stats} profileData={profileData} winRatio={winRatio} /> : "loading..."}


            </div>
          </div>
          <div style={{ backgroundColor: 'rgb(0,103,164)', backgroundImage: `url(/${currentHero.toLowerCase()}.png)`, backgroundPosition:'left', backgroundRepeat: 'no-repeat' }} id="hero-img" className="ui segment">

            <p></p>
            <p></p>
            <p className="hero-name">Showing details for</p>
            <span><h1 className="hero-name">{currentHero}</h1></span>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <div id="lower" className="ui grid">
            <div ref={compRef} className="four wide column">{stats.careerStats ? <HeroElimsGraph stats={heroeStats} profileData={profileData} winRatio={winRatio} /> : "loading..."}</div>
            <div className="four wide column">{stats.careerStats ? <BarChart stats={heroeStats} heroe={true} profileData={profileData} winRatio={winRatio} /> : "loading..."}</div>
            <div className="four wide column">{stats.careerStats ? <HeroTimeGraph stats={heroeStats} profileData={profileData} winRatio={winRatio} /> : "loading..."}</div>
            <div className="four wide column">{stats.careerStats ? <DamageGraph stats={heroeStats} profileData={profileData} winRatio={winRatio} /> : "loading..."}</div>
          </div>
        </div>
      </div>

    </>
  )
}
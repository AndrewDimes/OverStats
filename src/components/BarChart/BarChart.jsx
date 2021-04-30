import React from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function BarChart({ winRatio, profileData, stats, heroe }) {
    let wins;
    let losses;
    let winRate;
    let winRateSplit = []
    let imSry;

    if (heroe) {
        stats.game ? wins = stats.game.gamesWon : wins = 0
        if (wins === undefined) {
            wins = 0
        }
    }
    if (heroe) {
        stats.game ? losses = stats.game.gamesLost : losses = 0
        if (losses === undefined) {
            losses = 0;
        }

    }
    if (heroe) {
        const total = wins + losses
        winRate = (wins / total)
        winRateSplit = winRate.toFixed(2).toString().split('.')
        if (winRateSplit[0] < 1) {
            imSry = winRateSplit[1]
        } else if (wins === 0 && losses === 0) {
            imSry = 'N/A'
        } else {
            imSry = 100
        }

    }


    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: heroe ? `Win Rate: ${imSry}%` : `Overall Win Rate: ${winRatio}%`
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "doughnut",
                dataPoints: [

                    { label: "Wins", y: heroe ? wins : parseInt(stats.games.won), color: "rgb(100,248,40)" },
                    { label: "Losses", y: heroe ? losses : parseInt(stats.games.played) - parseInt(stats.games.won), color: "rgb(255,23,25)" }

                ]
            }
        ]
    }
    return (
        <div>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );

}

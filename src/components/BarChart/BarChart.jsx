import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function BarChart({winRatio, profileData}){
    console.log(winRatio)
    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `Win Ratio: ${winRatio}%`
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
           
                { label: "Wins", y: parseInt(profileData.competitiveStats.games.won), color: "rgb(100,248,40)" },
                {label: "Losses", y: parseInt(profileData.competitiveStats.games.played)-parseInt(profileData.competitiveStats.games.won), color: "rgb(255,23,25)"}
             
            ]
        }
        ]
    }
    return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);

}
                         
import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function DamageGraph({stats}){

    let heals;
    let dmg;
    stats.average.healingDoneAvgPer10Min ? heals = stats.average.healingDoneAvgPer10Min : heals = 0;
    stats.average.allDamageDoneAvgPer10Min ? dmg = stats.average.allDamageDoneAvgPer10Min : dmg = 0;
    
    const options = {
        backgroundColor: "rgb(118,118,118)",
        title: {
            text: `Damage/Heals per 10mins`
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
           
                { label: "Damage", y: dmg, color: "rgb(100,248,40)" },
                { label: "Heals", y: heals, color: "pink"},
                
                

             
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
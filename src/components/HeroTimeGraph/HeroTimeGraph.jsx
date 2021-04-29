import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function HeroTimeGraph({winRatio, profileData, stats}){
    let fireTime = stats.average
    let fireTimeString;
    let fireTimeFinal 
    fireTime.timeSpentOnFireAvgPer10Min ? fireTimeString = fireTime.timeSpentOnFireAvgPer10Min.toString().replace(':','.') : fireTimeFinal = 0
        
    if(fireTimeFinal !== 0){
        fireTimeFinal = parseFloat(fireTimeString)
    }
   
    let objTimeString;
    let objTimeFinal 
    fireTime.objectiveTimeAvgPer10Min ? objTimeString = fireTime.objectiveTimeAvgPer10Min.toString().replace(':','.') : objTimeFinal = 0
        
    if(objTimeFinal !== 0){
        objTimeFinal = parseFloat(objTimeString)
    }
 
    
    
    

    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `On Fire/Obj Time per 10mins`
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
           
                { label: "On Fire", y: fireTimeFinal, color: "rgb(100,248,40)" },
                { label: "Objective Time", y: objTimeFinal, color: "yellow"},
             
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
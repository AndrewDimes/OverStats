import React from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function HeroTimeGraph({ winRatio, profileData, stats }) {
    //Check if the API sent back this info if not set to 0
    let fireTime = stats.average
    let fireTimeString;
    let fireTimeFinal
    fireTime.timeSpentOnFireAvgPer10Min ? fireTimeString = fireTime.timeSpentOnFireAvgPer10Min.toString().replace(':', '.') : fireTimeFinal = 0

    if (fireTimeFinal !== 0) {
        fireTimeFinal = parseFloat(fireTimeString)
    }

    let objTimeString;
    let objTimeFinal
    fireTime.objectiveTimeAvgPer10Min ? objTimeString = fireTime.objectiveTimeAvgPer10Min.toString().replace(':', '.') : objTimeFinal = 0

    if (objTimeFinal !== 0) {
        objTimeFinal = parseFloat(objTimeString)
    }
    ///////////////////////////////////




    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `On Fire/Obj Time per 10mins`
        },
        data: [
            {
                type: "column",
                dataPoints: [

                    { label: "On Fire", y: fireTimeFinal, color: "rgb(100,248,40)" },
                    { label: "Objective Time", y: objTimeFinal, color: "yellow" },

                ]
            }
        ]
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}
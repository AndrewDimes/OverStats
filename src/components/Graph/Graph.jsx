import React from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Graph({ winRatio, profileData, stats }) {

    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `Overall Avg Kills/Deaths per 10mins`
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [

                    { label: "Eliminations", y: parseInt(stats.careerStats.allHeroes.average.eliminationsAvgPer10Min), color: "rgb(100,248,40)" },
                    { label: "Obj Kills", y: parseInt(stats.careerStats.allHeroes.average.objectiveKillsAvgPer10Min), color: "blue" },
                    { label: "Deaths", y: parseInt(stats.careerStats.allHeroes.average.deathsAvgPer10Min), color: "rgb(255,23,25)" },


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

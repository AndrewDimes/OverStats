import React from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function HeroElimsGraph({ stats }) {

    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `Total Elims/Deaths`
        },
        data: [
            {
                type: "column",
                dataPoints: [

                    { label: "Eliminations", y: parseInt(stats.combat.eliminations), color: "rgb(100,248,40)" },
                    { label: "Obj Kills", y: parseInt(stats.combat.objectiveKills), color: "blue" },
                    { label: "Deaths", y: parseInt(stats.combat.deaths), color: "rgb(255,23,25)" },



                ]
            }
        ]
    }
    return (
        <div>
            <CanvasJSChart options={options}
            />
        </div>
    );

}
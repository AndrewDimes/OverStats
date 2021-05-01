import React from 'react';
import CanvasJSReact from '../../canvasjs.react'


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function DamageGraph({ stats }) {

    let heals;
    let dmg;
    stats.average.healingDoneAvgPer10Min ? heals = stats.average.healingDoneAvgPer10Min : heals = 0;
    stats.average.allDamageDoneAvgPer10Min ? dmg = stats.average.allDamageDoneAvgPer10Min : dmg = 0;

    const options = {
        backgroundColor: "rgb(0,133,208)",
        title: {
            text: `Damage/Heals per 10mins`
        },
        data: [
            {
                type: "column",
                dataPoints: [

                    { label: "Damage", y: dmg, color: "rgb(100,248,40)" },
                    { label: "Heals", y: heals, color: "pink" },




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
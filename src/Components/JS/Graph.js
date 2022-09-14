import React, { useEffect } from "react";
import '../CSS/Graph.css'
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import axios, { Axios } from 'axios'
Chart.register(CategoryScale);

let date = [];
let amount = [];



axios.get("http://localhost:3000/Product")
    .then(res => {
        for (const dataObj of res.data) {
            date.push(parseFloat(dataObj.Date));
            amount.push(parseInt(dataObj.Amount));
        }

    }).catch(err => {
        // alert("Server not working to push the data", err)
    })

const Graph = () => {

    

    {
        return (
            <>
                <div className="graph-container">
                    <Line
                        data={{
                            labels: date,
                            datasets: [
                                {
                                    label: 'Received',
                                    data: amount,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                    hoverBorderColor: ['white'],
                                    pointBorderWidth: 5,
                                    pointBorderColor: 'transparent',
                                    tension: 0.5,
                                },
                                {
                                    label: 'Expenses',
                                    data: [0, 445, 778, 227, 449, 226],
                                    borderColor: ['blue'],
                                    borderWidth: 1,
                                    pointBorderWidth:4,
                                    pointBorderColor:'transparent',
                                    tension: 0.5,
                                },
                                {
                                    label: 'Balance',
                                    data: [0,151,848,998,224,668,448,45,1,885,554],
                                    borderColor:'green',
                                    borderWidth: 1,
                                    pointBorderWidth:4,
                                    pointBorderColor:'transparent',
                                    tension: 0.5,
                                }

                            ]
                        }}

                        height={200}
                        maxwidth={440}
                        options={{
                            maintainAspectRatio: false,
                        }}

                    />
                </div>
            </>
        );
    }
}

export default Graph;
import React from "react";
import '../CSS/Graph.css'
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

class Graph extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <div className="graph-container">
                    <Line
                        data={{
                            labels:
                                [
                                    'Jan',
                                    'Feb',
                                    'March',
                                    'April',
                                    'May',
                                    'june',
                                    'july',
                                    'aug',
                                    'sep',
                                    'sep',
                                    'oct',
                                    'nov',
                                    'dec'
                                ],
                            datasets: [
                                {
                                    label: 'Received',
                                    data: [0, 596, 55, 89, 255, 777, 123, 877, 558, 186, 786, 98, 487],
                                    backgroundColor: ['orange'],
                                    borderWidth: 1,
                                    borderColor: 'orange',
                                    hoverBorderColor: ['blue'],
                                },
                                {
                                    label: 'Expenses',
                                    data: [0, 445, 778, 227, 449, 226],
                                    backgroundColor: ['blue'],
                                    borderColor: ['blue'],
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Balance',
                                    data: [0,151,848,998,224,668,448,45,1,885,],
                                    backgroundColor:['green'],
                                    borderColor:'green',
                                    borderWidth:1,
                                }

                            ]
                        }}

                        height={200}
                        width={440}
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
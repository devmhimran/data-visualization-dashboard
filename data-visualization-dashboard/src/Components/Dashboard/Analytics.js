import React, { useEffect, useState } from 'react';
import GraphChart from './GraphChart';
import { Area, AreaChart, CartesianGrid, RadarChart, PolarAngleAxis, Legend, Bar, XAxis, YAxis, Tooltip, BarChart } from 'recharts';
import './Analytics.css'

const Analytics = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://data-visualization-server.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className=''>
            Analytics
            <div className='card shadow-lg p-3 rounded-2xl'>
                <div className="card-body">
                    <AreaChart
                        width={1650}
                        height={400}
                        data={data.slice(0, 100)}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="country" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="intensity" stroke="#ffb6b9" fill="#ffb6b9" />
                    </AreaChart>


                </div>
            </div>

            <div className="card shadow-lg mt-28">
                <div className="card-body">
                    <BarChart
                        width={1650}
                        height={400}
                        data={data.slice(0, 30)}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="likelihood" fill="#8ac6d1" />
                        <Bar dataKey="relevance" fill="#bbded6" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
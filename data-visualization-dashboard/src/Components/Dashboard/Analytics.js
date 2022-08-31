import React, { useEffect, useState } from 'react';
import GraphChart from './GraphChart';
import { Area, AreaChart, CartesianGrid, Pie, PieChart, Legend, Bar, XAxis, YAxis, Tooltip, BarChart, RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Analytics.css'

const Analytics = () => {
    const [data, setData] = useState([]);
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    useEffect(() => {
        fetch('https://data-visualization-server.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const data1 = [
        {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];

    return (
        <div className='h-screen w-10/12 container mx-auto'>
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
            <div className="grid grid-cols-3 gap-4">
                <div className="card shadow-lg rounded-2xl mt-28">
                    <div className="card-body">
                        <PieChart width={400} height={400}>
                            <Pie data={data.slice(0, 20)} dataKey="relevance" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={data.slice(0, 20)} dataKey="likelihood" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart>
                    </div>
                </div>
                <div className="card shadow-lg rounded-2xl mt-28 col-span-2">
                    <div className="card-body">
                        <AreaChart
                            width={1200}
                            height={400}
                            data={data.slice(0, 20)}
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
                            <Area type="monotone" dataKey="relevance" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="likelihood" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="intensity" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        </AreaChart>
                    </div>
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
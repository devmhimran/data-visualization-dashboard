import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Pie, PieChart, Legend, Bar, XAxis, YAxis, Tooltip, BarChart, ResponsiveContainer } from 'recharts';
import './Analytics.css'

const Analytics = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://data-visualization-server.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className='w-auto ml-20'>
            <div className="analytics__main">
            Analytics
            <div className='card bg-white shadow-lg p-3 rounded-xl'>
                <div className="card-body">
                    <ResponsiveContainer width="100%" height={400}>
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
                            <Area type="monotone" dataKey="intensity" stroke="#FF5E78" fill="#FF5E78" />
                        </AreaChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="card bg-white shadow-lg rounded-xl mt-28">
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart width={400} height={400}>
                                <Pie data={data.slice(0, 20)} dataKey="relevance" cx="50%" cy="50%" outerRadius={60} fill="#FC5404" />
                                <Pie data={data.slice(0, 20)} dataKey="likelihood" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#F1A661" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card bg-white p-6 shadow-lg rounded-xl mt-28 col-span-2">
                    <div className="card-body">
                        <ResponsiveContainer width="100%" height={400}>
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
                                <Area type="monotone" dataKey="relevance" stackId="1" stroke="#9900F0" fill="#9900F0" />
                                <Area type="monotone" dataKey="likelihood" stackId="1" stroke="#5EE6EB" fill="#5EE6EB" />
                                <Area type="monotone" dataKey="intensity" stackId="1" stroke="#28FFBF" fill="#28FFBF" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="card bg-white p-6 shadow-lg mt-28 mb-10 rounded-xl">
                <div className="card-body">
                    <ResponsiveContainer width="100%" height={400}>
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
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='h-5'></div>
            </div>
        </div>
    );
};

export default Analytics;
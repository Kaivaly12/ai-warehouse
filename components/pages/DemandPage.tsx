
import React from 'react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';
import { mockDemandForecast } from '../../services/mockData';
import Card from '../ui/Card';
import ChartContainer from '../ui/ChartContainer';

const DemandPage: React.FC = () => {
  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <ChartContainer title="Market Demand Forecast (Next 30 Days)">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={mockDemandForecast} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="day" stroke="rgb(156 163 175)" label={{ value: 'Day', position: 'insideBottom', offset: -5, fill: 'rgb(156 163 175)' }} />
                            <YAxis stroke="rgb(156 163 175)" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(22, 27, 34, 0.8)',
                                    borderColor: '#30363D',
                                    borderRadius: '10px'
                                }}
                            />
                            <Legend />
                            <Bar dataKey="historical" fill="rgba(33, 150, 243, 0.4)" name="Historical Sales" />
                            <Line type="monotone" dataKey="predicted" stroke="#4ade80" strokeWidth={2} name="AI Predicted Demand" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>
            <Card>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <span className="text-xl mr-2">⚡️</span> AI Demand Summary
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p className="text-sm">Based on predictive analysis, the following products are expected to have the highest demand:</p>
                    <ul className="list-decimal list-inside space-y-2 text-sm font-medium">
                        <li>NovaSync Smart Watch</li>
                        <li>CyberView VR Headset</li>
                        <li>QuantumLeap Wireless Mouse</li>
                        <li>DataStream External SSD 1TB</li>
                        <li>AeroGlide Drone Kit</li>
                    </ul>
                    <p className="text-sm pt-4 border-t border-dark-border">
                        <strong>Recommendation:</strong> Proactively increase inventory for these items by 15-20% to meet anticipated demand and avoid stockouts.
                    </p>
                </div>
            </Card>
        </div>
    </div>
  );
};

export default DemandPage;

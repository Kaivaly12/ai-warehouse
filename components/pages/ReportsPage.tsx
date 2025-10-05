
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { mockProfitVsCost } from '../../services/mockData';
import Card from '../ui/Card';
import ChartContainer from '../ui/ChartContainer';

const ReportsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">Generate Reports</h2>
          <div className="flex space-x-2">
            <button className="bg-neon-green-600 text-white px-4 py-2 rounded-lg hover:bg-neon-green-700 transition-colors text-sm font-semibold">
              Download Inventory (CSV)
            </button>
            <button className="bg-electric-blue-500 text-white px-4 py-2 rounded-lg hover:bg-electric-blue-600 transition-colors text-sm font-semibold">
              Download Demand (PDF)
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <ChartContainer title="Profit vs Cost Trend">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockProfitVsCost} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis dataKey="name" stroke="rgb(156 163 175)" />
                    <YAxis stroke="rgb(156 163 175)" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(22, 27, 34, 0.8)',
                            borderColor: '#30363D',
                            borderRadius: '10px'
                        }}
                    />
                    <Legend />
                    <Bar dataKey="profit" fill="#22c55e" name="Profit" />
                    <Bar dataKey="cost" fill="#f43f5e" name="Cost" />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>
        <Card>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="text-xl mr-2">💡</span> AI Optimization Summary
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-sm">Analysis of the past 6 months reveals several optimization opportunities:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                        <strong>Cost Reduction:</strong> Consolidate orders with 'Innovatech' to leverage bulk discounts, potentially reducing costs by 8%.
                    </li>
                    <li>
                        <strong>Profit Maximization:</strong> The 'Profit' margin on 'CyberView VR Headset' is 15% higher than average. Consider promotional campaigns to boost sales further.
                    </li>
                    <li>
                        <strong>Bot Efficiency:</strong> 'Loader-Delta' shows lower efficiency. Scheduling predictive maintenance could prevent costly downtime.
                    </li>
                </ul>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default ReportsPage;

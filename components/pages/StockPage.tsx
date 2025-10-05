
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Product } from '../../types';
import { mockProducts, mockStockUtilization } from '../../services/mockData';
import Card from '../ui/Card';
import ChartContainer from '../ui/ChartContainer';

const statusColor = (status: Product['status']) => {
  switch (status) {
    case 'In Stock':
      return 'bg-neon-green-500/20 text-neon-green-500';
    case 'Low Stock':
      return 'bg-yellow-500/20 text-yellow-500';
    case 'Out of Stock':
      return 'bg-red-500/20 text-red-500';
  }
};

const StockPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Inventory</h2>
            <button className="bg-electric-blue-500 text-white px-4 py-2 rounded-lg hover:bg-electric-blue-600 transition-colors text-sm font-semibold flex items-center">
              <span className="text-xl mr-2">✨</span> AI Reorder Suggestion
            </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-primary dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Product ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Quantity</th>
                <th scope="col" className="px-6 py-3">Unit Price</th>
                <th scope="col" className="px-6 py-3">Supplier</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id} className="bg-white border-b dark:bg-dark-secondary dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-primary">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{product.id}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{product.supplier}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      <ChartContainer title="Stock Utilization Over Time">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockStockUtilization} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2196F3" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="rgb(156 163 175)" />
            <YAxis stroke="rgb(156 163 175)" unit="%" />
            <Tooltip
                contentStyle={{
                    backgroundColor: 'rgba(22, 27, 34, 0.8)',
                    borderColor: '#30363D',
                    borderRadius: '10px'
                }}
            />
            <Area type="monotone" dataKey="utilization" stroke="#2196F3" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default StockPage;

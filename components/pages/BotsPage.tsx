
import React from 'react';
import { mockBots } from '../../services/mockData';
import { Bot, BotStatus } from '../../types';
import Card from '../ui/Card';

const statusClasses = {
  [BotStatus.Active]: 'bg-neon-green-500 text-white',
  [BotStatus.Idle]: 'bg-yellow-500 text-white',
  [BotStatus.Maintenance]: 'bg-red-500 text-white',
};

const BotCard: React.FC<{ bot: Bot }> = ({ bot }) => (
  <Card className="flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{bot.name}</h3>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[bot.status]}`}>
          {bot.status}
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{bot.id}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Tasks Completed:</span>
          <span className="font-semibold text-gray-800 dark:text-white">{bot.tasksCompleted}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Efficiency:</span>
          <span className="font-semibold text-neon-green-500">{bot.efficiency}%</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Battery:</span>
            <div className="w-1/2 bg-gray-200 dark:bg-dark-primary rounded-full h-2.5">
                <div className="bg-electric-blue-500 h-2.5 rounded-full" style={{ width: `${bot.battery}%` }}></div>
            </div>
            <span className="font-semibold text-electric-blue-400">{bot.battery}%</span>
        </div>
      </div>
    </div>
    <div className="mt-6 flex space-x-2">
      <button className="flex-1 bg-electric-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-electric-blue-600 text-xs font-semibold transition">Start</button>
      <button className="flex-1 bg-gray-500 text-white px-3 py-1.5 rounded-lg hover:bg-gray-600 text-xs font-semibold transition">Stop</button>
      <button className="flex-1 bg-gray-200 text-gray-800 dark:bg-dark-primary dark:text-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-border text-xs font-semibold transition">Assign Task</button>
    </div>
  </Card>
);

const BotsPage: React.FC = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Bot Control Panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockBots.map((bot) => (
                <BotCard key={bot.id} bot={bot} />
            ))}
        </div>
    </div>
  );
};

export default BotsPage;

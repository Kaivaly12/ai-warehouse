
import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import { getMarketTrendAnalysis, getRestockSuggestions } from '../../services/geminiService';

const KpiCard: React.FC<{ title: string; value: string; change?: string; icon: string }> = ({ title, value, change, icon }) => (
  <Card>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
        {change && (
          <p className={`text-sm ${change.startsWith('+') ? 'text-neon-green-500' : 'text-red-500'}`}>{change}</p>
        )}
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  </Card>
);

const AiInsightCard: React.FC<{ title: string; children: React.ReactNode; isLoading: boolean }> = ({ title, children, isLoading }) => (
    <Card className="flex-1 flex flex-col min-h-[200px]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
            <span className="text-xl mr-2">✨</span> {title}
        </h3>
        {isLoading ? (
             <div className="flex-grow flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue-500"></div>
            </div>
        ) : (
            <div className="flex-grow text-gray-600 dark:text-gray-300">
                {children}
            </div>
        )}
    </Card>
);


const HomePage: React.FC = () => {
    const [marketTrend, setMarketTrend] = useState('');
    const [restockItems, setRestockItems] = useState<string[]>([]);
    const [isTrendLoading, setIsTrendLoading] = useState(true);
    const [isRestockLoading, setIsRestockLoading] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            setIsTrendLoading(true);
            setMarketTrend(await getMarketTrendAnalysis());
            setIsTrendLoading(false);

            setIsRestockLoading(true);
            setRestockItems(await getRestockSuggestions());
            setIsRestockLoading(false);
        };
        fetchInsights();
    }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Stock Value" value="$1.2M" change="+2.5%" icon="💰" />
        <KpiCard title="Active Warehouse Bots" value="4" change="+1" icon="🤖" />
        <KpiCard title="Predicted Demand" value="85%" change="-1.2%" icon="📈" />
        <KpiCard title="Out-of-Stock Alerts" value="2" icon="⚠️" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <AiInsightCard title="Market Trend Analysis" isLoading={isTrendLoading}>
            <p className="text-sm">{marketTrend}</p>
        </AiInsightCard>
        <AiInsightCard title="Suggested Restock Items" isLoading={isRestockLoading}>
            <ul className="list-disc list-inside space-y-1 text-sm">
                {restockItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </AiInsightCard>
      </div>
    </div>
  );
};

export default HomePage;

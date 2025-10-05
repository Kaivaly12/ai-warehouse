
import React from 'react';
import Card from './Card';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => {
  return (
    <Card className="w-full h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h3>
      <div className="flex-grow w-full h-80">
        {children}
      </div>
    </Card>
  );
};

export default ChartContainer;

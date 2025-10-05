export enum Page {
  Home = 'Home',
  Stock = 'Stock',
  Demand = 'Demand Forecast',
  Bots = 'Bots',
  Reports = 'Reports',
  Settings = 'Settings',
}

export enum BotStatus {
  Active = 'Active',
  Idle = 'Idle',
  Maintenance = 'Maintenance',
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  supplier: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface Bot {
  id: string;
  name: string;
  status: BotStatus;
  tasksCompleted: number;
  efficiency: number;
  battery: number;
}

export interface ChartData {
  // Fix: Made name and value optional to support different chart data structures.
  name?: string;
  value?: number;
  [key: string]: any;
}

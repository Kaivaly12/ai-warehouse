
import { Product, Bot, ChartData, BotStatus } from '../types';

export const mockProducts: Product[] = [
  { id: 'PID-001', name: 'QuantumLeap Wireless Mouse', quantity: 120, price: 49.99, supplier: 'Innovatech', status: 'In Stock' },
  { id: 'PID-002', name: 'NovaSync Smart Watch', quantity: 25, price: 199.99, supplier: 'FutureGadgets', status: 'Low Stock' },
  { id: 'PID-003', name: 'EchoSphere Bluetooth Speaker', quantity: 0, price: 89.99, supplier: 'SoundWave', status: 'Out of Stock' },
  { id: 'PID-004', name: 'CyberView VR Headset', quantity: 60, price: 299.99, supplier: 'Visionary Inc.', status: 'In Stock' },
  { id: 'PID-005', name: 'AeroGlide Drone Kit', quantity: 35, price: 499.99, supplier: 'SkyHigh Tech', status: 'Low Stock' },
  { id: 'PID-006', name: 'DataStream External SSD 1TB', quantity: 250, price: 129.99, supplier: 'Innovatech', status: 'In Stock' },
  { id: 'PID-007', name: 'FlexiGrip Phone Stand', quantity: 500, price: 19.99, supplier: 'GadgetCo', status: 'In Stock' },
];

export const mockBots: Bot[] = [
  { id: 'BOT-A1', name: 'Picker-Alpha', status: BotStatus.Active, tasksCompleted: 142, efficiency: 98.5, battery: 88 },
  { id: 'BOT-B2', name: 'Stocker-Bravo', status: BotStatus.Idle, tasksCompleted: 98, efficiency: 95.2, battery: 100 },
  { id: 'BOT-C3', name: 'Scanner-Charlie', status: BotStatus.Active, tasksCompleted: 210, efficiency: 99.1, battery: 76 },
  { id: 'BOT-D4', name: 'Loader-Delta', status: BotStatus.Maintenance, tasksCompleted: 55, efficiency: 90.7, battery: 20 },
  { id: 'BOT-E5', name: 'Packer-Echo', status: BotStatus.Active, tasksCompleted: 180, efficiency: 96.8, battery: 92 },
];

export const mockStockUtilization: ChartData[] = [
    { name: 'Jan', utilization: 65 },
    { name: 'Feb', utilization: 68 },
    { name: 'Mar', utilization: 75 },
    { name: 'Apr', utilization: 72 },
    { name: 'May', utilization: 80 },
    { name: 'Jun', utilization: 85 },
];

export const mockDemandForecast: ChartData[] = [
    { day: 1, predicted: 1200, historical: 1100 },
    { day: 5, predicted: 1500, historical: 1300 },
    { day: 10, predicted: 1800, historical: 1650 },
    { day: 15, predicted: 1700, historical: 1750 },
    { day: 20, predicted: 2100, historical: 1900 },
    { day: 25, predicted: 2500, historical: 2300 },
    { day: 30, predicted: 2800, historical: 2600 },
];

export const mockProfitVsCost: ChartData[] = [
    { name: 'Jan', profit: 4000, cost: 2400 },
    { name: 'Feb', profit: 3000, cost: 1398 },
    { name: 'Mar', profit: 5000, cost: 3800 },
    { name: 'Apr', profit: 4780, cost: 2908 },
    { name: 'May', profit: 5890, cost: 4800 },
    { name: 'Jun', profit: 6390, cost: 3800 },
];

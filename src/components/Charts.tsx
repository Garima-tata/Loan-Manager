// src/components/Charts.tsx
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

export const Charts: React.FC = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Active Users',
        backgroundColor: '#0378E3',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const barData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Active Users',
        backgroundColor: '#A61B13',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // const lineData = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       label: 'Savings Over Time',
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       borderColor: '#6B9908', // Line color
  //       backgroundColor: '#6B9908', //'rgba(75, 192, 192, 0.2)', // Fill color under the line (20% opacity)
  //       // fill: true, // Enable fill under the line
  //       tension: 0,
  //       fill: {
  //         target: 'origin',
  //         above: '#6B9908',   // Area will be red above the origin
  //         below: '#6B9908'    // And blue below the origin
  //       }
      
  //     },
  //   ],
  // };
  const lineData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'Loans Released Monthly',
          data: [480, 280, 160, 680, 30, 220, 260, 10, 80, 700, 200, 950],
          backgroundColor: '#8BC34A',
          borderColor: '#8BC34A',
          borderWidth: 1,
          fill: true,
        },
      ],
    };
    
  
  
  return (
    <div className="charts-container">
      <div className="chart">
        <h3>Savings Over Time (Line Chart)</h3>
        <Line data={lineData} />
      </div>
      <div className="chart">
        <h3>Active Users (Bar Chart)</h3>
        <Bar data={barData} />
      </div>
      <div className="chart">
        <h3>Active Users (Bar Chart)</h3>
        <Bar data={barData2} />
      </div>
    </div>
  );
};

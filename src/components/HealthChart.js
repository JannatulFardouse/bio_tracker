import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HealthChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Heart Rate',
        data: data.map(item => item.heartRate),
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Glucose Level',
        data: data.map(item => item.glucose),
        borderColor: 'green',
        fill: false
      }
    ]
  };

  return <Line data={chartData} />;
};

export default HealthChart;

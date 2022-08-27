import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [98.8, 1.2],
      backgroundColor: [
        'rgba(25,151,0, .5)',
        'rgba(255,87,34, .5)'
      ],
      borderColor: [
        'rgba(25,151,0, .8)',
        'rgba(255,87,34, .8)'
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
      <Pie options={{ maintainAspectRatio: false }} data={data} />
  );
}

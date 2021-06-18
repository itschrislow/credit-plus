import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { TURNOVER } from 'src/data/turnover';

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'Turnover (thousands)'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Finance Amount (thousands)'
      }
    }
}
};

const Turnover = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <Scatter data={TURNOVER} options={options}/>
    </div>
  );
}

export default Turnover;
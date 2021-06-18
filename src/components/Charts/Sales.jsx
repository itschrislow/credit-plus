import { Line } from 'react-chartjs-2';
import { SALES_DATA } from 'src/data/sales';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Sector = () => {
  return (
    <div className="p-5 h-96 bg-white rounded-lg">
      <div className="title">Product Sales</div>
      <Line data={SALES_DATA} options={options}></Line>
    </div>
  );
}

export default Sector;
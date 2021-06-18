import { Bar } from 'react-chartjs-2';
import { PRODUCT_STATS } from 'src/data/productStats';

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'units'
      }
    },
    x: {
      title: {
        display: true,
        text: 'products'
      }
    },
  },
};

const ProductStats = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="title">Product Statistics</div>
      <Bar data={PRODUCT_STATS} options={options}></Bar>
    </div>
  );
}

export default ProductStats;
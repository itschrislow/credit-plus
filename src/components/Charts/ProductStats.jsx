import { Bar } from 'react-chartjs-2';
import { PRODUCT_STATS } from 'src/data/productStats';

const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'UNITS (THOUSNADS)'
      }
    },
    x: {
      title: {
        display: true,
        text: 'PRODUCTS'
      }
    },
  },
};

const ProductStats = () => {
  return (
    <div className="bg-white rounded-lg p-5">
      <div className="title">Product Statistics</div>
      <Bar data={PRODUCT_STATS} options={options}></Bar>
    </div>
  );
}

export default ProductStats;
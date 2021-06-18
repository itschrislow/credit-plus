import { Doughnut } from 'react-chartjs-2';
import { SECTOR_DATA } from 'src/data/sector';

const Sector = () => {
  return (
    <div className="p-5 h-96 bg-white rounded-lg">
      <Doughnut
        data={SECTOR_DATA}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: 'left',
            labels: {
              boxWidth: 10
            }
          }
        }}
      />
    </div>
  );
}

export default Sector;
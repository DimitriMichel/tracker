import React from 'react';
import ReactFrappeChart from 'react-frappe-charts';
import styled from 'styled-components';

const Chart = styled.div`
  grid-area: stock-chart;

  border-radius: 4px;
`;

const PriceChart = () => {
  return (
    <Chart>
      <ReactFrappeChart
        type="axis-mixed"
        colors={['#1FC894', '#000']}
        axisOptions={{ xAxisMode: 'span', yAxisMode: 'span', xIsSeries: 2 }}
        height={290}
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            { name: 'dataset 1', values: [18, 40, 30, 35, 8, 52, 17, 4] },

          ],
        }}
        lineOptions={{ regionFill: 1 }}
        dotSize={2}
      />
    </Chart>
  );
};

export default PriceChart;

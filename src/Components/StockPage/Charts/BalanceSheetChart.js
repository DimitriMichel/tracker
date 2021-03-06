import React from 'react';
import styled from 'styled-components';
import ReactFrappeChart from 'react-frappe-charts';
/*
 *
 * Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sun
 *18,40,30,35,8,52,17,4
 *30,50,10,15,18,32,27,14
 *
 * */

const Chart = styled.div`
  grid-area: chart;
  text-align: center;

  width: 96%;
  height: 100%;
`;

const BalanceSheetChart = () => {
  return (
    <Chart>
      <ReactFrappeChart
        type="axis-mixed"
        colors={['white', 'white']}
        axisOptions={{ xAxisMode: 'tick', yAxisMode: 'span', xIsSeries: 2 }}
        height={290}
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              name: 'Debt',
              values: [18, 40, 30, 35, 8, 52, 17, 4],
              chartType: 'line',
            },
            {
              name: 'Profit',
              values: [30, 50, 10, 15, 18, 32, 27, 14],
              chartType: 'bar',
            },
          ],
        }}
        lineOptions={{ regionFill: 1 }}
        dotSize={6}
      />
    </Chart>
  );
};

export default BalanceSheetChart;

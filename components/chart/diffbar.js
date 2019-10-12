import React from 'react'
import Chart from 'react-google-charts';

class Diffbar extends React.Component {
    render() {
        return (
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    diffdata={{
                        old: [
                            ['Name', 'Popularity'],
                            ['Cesar', 250],
                            ['Rachel', 4200],
                            ['Patrick', 2900],
                            ['Eric', 8200],
                        ],
                        new: [
                            ['Name', 'Popularity'],
                            ['Cesar', 370],
                            ['Rachel', 600],
                            ['Patrick', 700],
                            ['Eric', 1500],
                        ],
                    }}
                    options={{
                        legend: { position: 'top' },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
    }
}
export default Diffbar;
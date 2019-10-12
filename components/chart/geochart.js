import React from 'react'
import Chart from 'react-google-charts';

class Geochart extends React.Component {
    render() {
        return (
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="GeoChart"
                    data={[
                        ['Country', 'Popularity'],
                        ['Brunei Darussalam', 200],
                        ['Cambodia', 300],
                        ['Indonesia', 400],
                        ['Laos', 500],
                        ['Malaysia', 600],
                        ['Myanmar', 700],
                        ['Philippines', 700],
                        ['Singapore', 700],
                        ['Vietnam', 700],
                        ['Thailand', 700],
                    ]}

                    options={{
                        sizeAxis: { minValue: 0, maxValue: 100 },
                        region: '035', // South-Eastern Asia
                        backgroundColor: '#81d4fa',
                        datalessRegionColor: "gray",
                        tooltip:{textStyle: {color: 'black',fontSize: '20'}, showColorCode: true,  },
                           

                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE"
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}
export default Geochart;
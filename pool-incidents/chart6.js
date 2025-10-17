// CHART 6: NUMBER OF POOP INCIDENTS BY POOL SIZE
// SCATTER CHART
// Pool size from smallest to largest on x axis
// Number of poop incidents from fewest to most on y axis

const canvas6 = document.getElementById('chart6');

// d3's function for reading a csv
d3.csv('data/pool_incidents_cleaned.csv')
  .then(makeChart6);


function makeChart6(by_size) {

        // get csv data and turn it into an array
        //Prop_ID,cubic_feet,Pool,Borough_Name,category_1,category_2,total_incidents
        let poolnames = by_size.map(function(d) {return d.Pool});
        let boroughs = by_size.map(function(d) {return d.Borough_Name});
        //let volume = by_size.map(function(d) {return d.cubic_feet});
        //let incidents_per_pool = by_size.map(function(d) {return d.total_incidents});
        let volume = by_size.map(d => parseFloat(d.cubic_feet));
        let incidents_per_pool = by_size.map(d => parseFloat(d.total_incidents));
        let incident_colours = by_size.map(function(d) {return d.total_incidents === '0' ? 'rgba(54, 162, 235, 0.7)' : 'rgba(139, 69, 19, 0.7)'});

        // linear regression extension for chart.js y = mx + b
        const points = volume.map((x, i) => [x, incidents_per_pool[i]]);
        const result = regression.linear(points);
        const gradient = result.equation[0]; // slope m
        const yIntercept = result.equation[1]; // intercept b
        console.log(result)
        console.log(result.r2)

        chart_6 = new Chart (canvas6, {
        type: 'scatter',
        data: {
        datasets: [{
            label: 'At least 1 incident',
            data: volume.map((v, i) => ({
                x: parseFloat(v),
                y: parseFloat(incidents_per_pool[i])
            })),
            backgroundColor: incident_colours,
            pointRadius: 6,
            pointHoverRadius: 8,
        }
        
        ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            // Get the index of the data point
                            const index = context.dataIndex;
                            // Get the pool name from the poolnames array
                            const poolName = poolnames[index];
                            // Get the x and y values
                            const x = context.parsed.x;
                            const y = context.parsed.y;
                            return `${poolName}: (${x}, ${y})`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Pool Size (cubic feet)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Poop Incidents'
                    }
                }
            }
        }

});


}
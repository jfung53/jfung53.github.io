// CHART 3: POOL ATTENDANCE NUMBERS
// Horizontal Bar Chart
// Sort descending by average attendance numbers per session per day
// Labels: pool name and borough

const canvas3 = document.getElementById('chart3');

// read csv via d3 function
// go live to preview in browser
d3.csv('data/chart3_attendance.csv')
  .then(makeChart3);

function makeChart3(attendance) {

    // get csv data and turn it into an array
    let pool_names = attendance.map(function(d) {return d.pool_name});
    let boroughs = attendance.map(function(d) {return d.borough});
    let attendees = attendance.map(function(d) {return d.avg_attendance});
    
    // create a chart inside the function
    chart_3 = new Chart (canvas3, {
        type: 'bar',

        data: {
            labels: pool_names,
            datasets: [{
                label: 'Avg Swimmers per Session',
                data: attendees,
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },

        options: {
            // turn bar chart on its side for horizontal bar (chart comes from y axis)
            indexAxis: 'y',
            hoverBackgroundColor: 'rgba(255, 25, 75, 0.7)',
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            return pool_names[index] + ' (' + boroughs[index] + ')';
                        },
                        label: function(context) {
                            return 'Swimmers: ' + context.parsed.x;
                        }
                    }
                }
            }
        }
    });

}



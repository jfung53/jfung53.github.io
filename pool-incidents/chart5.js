// CHART 5: 10 POOPIEST POOLS
// Horizontal Bar Chart
// Top 10 offending pools
// One pool per bar
// Sort descending by number of incidents per pool (aka bar size)
// Labels: pool name and borough

const canvas5 = document.getElementById('chart5');

// d3's function for reading a csv
d3.csv('data/chart5_top_offending_pools.csv')
  .then(makeChart5);

function makeChart5(mostpoop) {

        // get csv data and turn it into an array
        //pool_name,borough,category_1,category_2,total_incidents
        let poolnames = mostpoop.map(function(d) {return d.pool_name});
        let boroughs = mostpoop.map(function(d) {return d.borough});
        let category1 = mostpoop.map(function(d) {return d.category_1});
        let category2 = mostpoop.map(function(d) {return d.category_2});
        let total = mostpoop.map(function(d) {return d.total_incidents});
    
    // create a chart inside the function
    chart_5 = new Chart(canvas5, {
        type: 'bar',
        data: {
            labels: poolnames,
            datasets: [
                {
                    label: 'Category 2 (liquid poop or vomit)',
                    data: category2,
                    backgroundColor: 'rgba(139, 69, 19, 0.7)',
                    borderColor: 'rgba(139, 69, 19, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Category 1 (solid poop)',
                    data: category1,
                    backgroundColor: 'rgba(139, 69, 19, 0.3)',
                    borderColor: 'rgba(139, 69, 19, 0.5)',
                    borderWidth: 1,
                },
                
            ]
        },
        options: {
            hoverBackgroundColor: 'rgba(139, 69, 19, 0.9)',
            // turn bar chart on its side (chart comes from y axis)
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                }
            },
            plugins: {
            tooltip: {
                callbacks: {
                title: function(context) {
                    const index = context[0].dataIndex;
                    return poolnames[index] + ' (' + boroughs[index] + ')';
                },
                }
            }
        }
        }
    });
}
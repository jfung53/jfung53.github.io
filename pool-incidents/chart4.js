// CHART 4: WEEKLY POOP INCIDENTS
// Number of pool closures per week due to poop incidents
// Line Chart
// weeks on x axis, grouped and labeled by month
// number of incidents on y axis (category 1 and category 2 lines)

const canvas4 = document.getElementById('chart4');

// read csv via d3 function
// go live to preview in browser
d3.csv('data/chart4_weekly_incidents.csv')
  .then(makeChart4);

function makeChart4(closures) {

    // get csv data and turn it into an array
    let weeks = closures.map(function(d) {return d.monthname});
    let category1 = closures.map(function(d) {return d.category_1});
    let category2 = closures.map(function(d) {return d.category_2});
    let years = closures.map(function(d) {return d.year});

    
    chart_4 = new Chart (canvas4, {
        type: 'bar',
        data: {
            labels: weeks,
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
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                }
            }
        }
    }
    );
}
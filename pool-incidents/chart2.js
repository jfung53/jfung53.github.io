// CHART 2: LARGEST AND SMALLEST POOLS
// Bar Chart
// 7 largest and 7 smallest pools by cubic feet
// Labels: pool name and borough
// Sort descending from L to R

// pool_name,borough,cubic_feet


const canvas2 = document.getElementById('chart2');

// make dataset variables
const largeLabels = ['Highbridge', 'Betsy Head', 'McCarren', 'Astoria', 'Red Hook', 'Crotona Pool', 'Sunset Park'];
const largeVolumes = [374220.0, 231412.0, 228523.0, 217800.0, 171600.0, 158400.0, 146853.0];
const smallLabels = ['Haffen', 'Claremont', 'Commodore Barry', 'Douglass and DeGraw', 'Fort Totten', 'Liberty', 'Fisher'];
const smallVolumes = [576.0, 576.0, 576.0, 576.0, 471.0, 400.0, 400.0];


// create data object
const dataObj = {
    labels: largeLabels,
    datasets: [{ 
        label: 'Largest pools (Cubic Feet)', 
        data: largeVolumes }]
    };


// instantiate new chart instance with two arguments:
// 1. canvas element where chart will be rendered
// 2. options object
chart_2 = new Chart (canvas2, {
    type: 'bar',
    data: dataObj,
    
    options: {
        backgroundColor: 'rgba(173, 255, 47, .5)',
        hoverBackgroundColor: 'rgba(0,255,0, .5)',
        borderColor: "limegreen",
        borderWidth: 1,
        animation: {
            duration: 300,
        scales: {
            y: {
                beginAtZero: true,
                max: 400000,
            }
        }
        },

        },
    }
);

// vanilla javascript

// define our own function called toggle
// e = events (convention)
// toggles between two datasets and styles
// got help from Cursor

function toggle (e) {
    const showingLarge = chart_2.data.datasets[0].label.indexOf('Large') !== -1;
    if (showingLarge) {
        chart_2.data.labels = smallLabels;
        chart_2.data.datasets[0].data = smallVolumes;
        chart_2.data.datasets[0].label = 'Smallest pools (Cubic feet)';
        chart_2.options.scales.y.max = 10000;
    } else {
        chart_2.data.labels = largeLabels;
        chart_2.data.datasets[0].data = largeVolumes;
        chart_2.data.datasets[0].label = 'Largest pools (Cubic Feet)';
        chart_2.options.scales.y.max = 400000;
    }

    chart_2.update();
}
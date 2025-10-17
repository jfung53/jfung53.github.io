// CHART 1: POOL TYPES
// Bar Chart
// Number of pools (y axis) per pool type (x axis)
// Sort descending from L to R
 

// this seemed to persist across all the charts regardless of which script file i put it in, which is a bonus?
Chart.defaults.font.family = 'IBM Plex Mono';

const canvas = document.getElementById('chart1');


// instantiate new chart instance with two arguments:
// 1. canvas element where chart will be rendered
// 2. options object
chart_1 = new Chart (canvas, {
    type: 'bar',
    data: {
        labels: ['Intermediate', 'Wading', 'Mini', 'Olympic', 'Large', 'Diving'],
        datasets: [{
            label: 'number of pools',
            data: [27, 23, 17, 14, 5, 2],
        }]
    },
    options: {
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        hoverBackgroundColor: 'rgba(30, 144, 255, 0.7)',
        borderColor: "dodgerblue",
        borderWidth: 1,
        animation: {
            duration: 500,
        }
    }
    
//     options: {
//         plugins: {
//             tooltip: true,
//             zoom: {
//                 pan: {
//                     enabled: false,
//                     mode: 'xy',
//                 },
//                 // drag to zoom in
//                 zoom: {
//                     drag: {
//                     enabled: true,
//                     borderColor: 'rgb(54, 162, 235)',
//                     borderWidth: 1,
//                     backgroundColor: 'rgba(54, 162, 235, 0.3)',
//                     maintainAspectRatio: false,
//                 }
//             }
//         }
//     },
// }
});

// self made function that just reloads the original chart
// function resetZoom() {
//     chart_1.resetZoom();
// };

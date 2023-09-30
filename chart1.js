// var ctx = document.getElementById('lineChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'More', 'Temperature'],
//         datasets: [{
//             label: 'Cảm biến',
//             data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
//             backgroundColor: [
//                 'rgba(85,85,85, 1)'

//             ],
//             borderColor: 'rgb(41, 155, 99)',

//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });
// var ctx = document.getElementById('lineChart').getContext('2d');

// const xValues = [100,200,300,400,500,600,700,800,900,1000,1200,1400];

// new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{ 
//       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478,2567,1490],
//       label: 'Nhiệt độ',
//       borderColor: "red",
//       fill: false
//     }, { 
//       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000,1589,2560],
//       label: 'Độ ẩm',
//       borderColor: "green",
//       fill: false
//     }, { 
//       data: [300,700,2000,5000,6000,4000,2000,1000,200,100,5000,2000],
//       label: 'Ánh sáng',
//       borderColor: "blue",
//       fill: false,
//     }]
//   },
//   options: {
//     legend: {display: false}
//   }
// });

var ctx = document.getElementById('lineChart').getContext('2d');

const xValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200];
const numDataPoints = xValues.length;
const dataWindowSize = 15; // Number of data points to show in the window

// Initialize the initial data values
const initialData = {
  temperature: [30, 35, 25, 11, 45, 17, 28, 40, 17, 2, 14, 12, 50, 34, 25],
  humidity: [50, 30, 17, 85, 70, 75, 81, 94, 60, 70, 92, 73, 100, 73, 56, 97],
  light: [300, 700, 2000, 1050, 100, 500, 120, 100, 300, 100, 1000, 2000, 56, 72, 456, 230]
};

//Define data values for line charts
var datasets = {
  labels: xValues.slice(-dataWindowSize), // Show only a window of data points
  datasets: [
    {
      data: initialData.temperature.slice(-dataWindowSize),
      label: 'Nhiệt độ',
      yAxisID: 'A',
      borderColor: "red",
      backgroundColor: 'transparent',
      fill: false
    },
    {
      data: initialData.humidity.slice(-dataWindowSize),
      label: 'Độ ẩm',
      yAxisID: 'A',
      borderColor: "green",
      backgroundColor: 'transparent',
      fill: false
    },
    {
      data: initialData.light.slice(-dataWindowSize),
      label: 'Ánh sáng',
      yAxisID: 'B',
      borderColor: "blue",
      backgroundColor: 'transparent',
      fill: false
    }
  ]
};

//define option for line charts 
var options = {
  scales: {
      A: {
            position: 'left',
            type: 'linear',
            ticks: {
                min: 0,
                max: 100,
                stepSize: 5,
                reverse: true
            },
        },
      B:  {
            position: 'right',
            ticks: {
                min: 0,
                max: 2000,
                stepSize: 100,             
            },
        },
      x: [
        {
            type: 'category',
        },
    ],
  },
  legend: { 
    display: false 
  }
};

// Create a function to shift data points to the left
function shiftDataLeft(data) {
  return data.slice(1).concat(data[0]);
}

const chart = new Chart(ctx, {
  type: "line",
  data: datasets,
  options: options,
});


// Function to update chart data by shifting it to the left
function updateChartData() {
  // Shift data to the left for each category
  chart.data.datasets[0].data = shiftDataLeft(chart.data.datasets[0].data);
  chart.data.datasets[1].data = shiftDataLeft(chart.data.datasets[1].data);
  chart.data.datasets[2].data = shiftDataLeft(chart.data.datasets[2].data);

  // Redraw the chart
  chart.update();
}

// Update chart data every 3 seconds (adjust the interval as needed)
setInterval(updateChartData, 1000);

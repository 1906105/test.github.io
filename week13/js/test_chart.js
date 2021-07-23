// var labels = ["ichi","ni","san","yon","go","roku","nana"];

// var data = {
//     labels: labels,
//     datasets: [{
//         label:"初めてのグラフ",
//         data: [0,10,15,3,20,60,10],
//     }]
// };

// var config = {
//     type:"line",
//     data,
//     Option:{},
// };

// var lineChart = new Chart(
//     document.getElementById("lineChart"),
//     config,
// );

// var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

// var data = {
//     labels: labels,
//     datasets: [{
//         label: '初めてのグラフ',
//         borderColor: 'rgb(130,60,70)',
//         backgroundColor: 'rgb(255,100,130)',
//         data: [0, 10, 15, 3, 20, 60, 10],
//     }]
// };

// var config = {
//     type: 'line',
//     data,
//     options: {},
// };

// var lineChart = new Chart(
//     document.getElementById('lineChart'),
//     config,
// );



const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config = {
    type: 'radar',
    data: buadata,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
};

var buaChart = new Chart(
    document.getElementById('buaChart'),
    // $('#buachart')
    
    config,
);



// ラベル、データ、コンフィグの3つをつくって1つのデータができる
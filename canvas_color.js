
require(['https://cdn.jsdelivr.net/npm/chart.js'], function (chartjs) {
    var ctx = document.getElementById("myChart").getContext("2d");

    if(window.RT && Object.keys(RT).includes('myLines')) {

        var args = JSON.parse( RT['myLines'] );
        console.log( 'args:' )
        console.dir(args);
    }

    //console.dir(myArr);
    var colors = {
      green: {
        fill: '#e0eadf',
        stroke: '#5eb84d',
      },
      lightBlue: {
        stroke: '#6fccdd',
      },
      darkBlue: {
        fill: '#92bed2',
        stroke: '#3282bf',
      },
      purple: {
        fill: '#8fa8c8',
        stroke: '#75539e',
      },
    };

    var loggedIn = [26, 36, 42, 38, 40, 30, 12];
    var available = [34, 44, 33, 24, 25, 28, 25];
    var availableForExisting = [16, 13, 25, 33, 40, 33, 45];
    var unavailable = [5, 9, 10, 9, 18, 19, 20];
    var xData = [13, 14, 15, 16, 17, 18, 19];

    console.log('myArr:')
    console.dir(myArr);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xData,
        datasets: [{
          label: "Unavailable",
          fill: true,
          backgroundColor: colors.purple.fill,
          pointBackgroundColor: colors.purple.stroke,
          borderColor: colors.purple.stroke,
          pointHighlightStroke: colors.purple.stroke,
          borderCapStyle: 'butt',
          data: unavailable,

        }, {
          label: "Available for Existing",
          fill: true,
          backgroundColor: colors.darkBlue.fill,
          pointBackgroundColor: colors.darkBlue.stroke,
          borderColor: colors.darkBlue.stroke,
          pointHighlightStroke: colors.darkBlue.stroke,
          borderCapStyle: 'butt',
          data: availableForExisting,
        }, {
          label: "Available",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.lightBlue.stroke,
          borderColor: colors.lightBlue.stroke,
          pointHighlightStroke: colors.lightBlue.stroke,
          borderCapStyle: 'butt',
          data: available,
        }, {
          label: "Logged In",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.green.stroke,
          borderColor: colors.green.stroke,
          pointHighlightStroke: colors.green.stroke,
          data: loggedIn,
        }]
      },
      options: {
        responsive: false,
        // Can't just just `stacked: true` like the docs say
        scales: {
          yAxes: [{
            stacked: true,
          }]
        },
        animation: {
          duration: 750,
        },
      }
    });
  });
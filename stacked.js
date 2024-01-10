const RT = window.Roundtrip;

var flamegraph = function( x ) {
   
    var lengths = [
        [200,300,100],
        [20, 380,200],
        [200,100,300],
        [50,20,530],
        [300,100,200],
        [200,300,100],
        [80,120,400],
        [400,50,150],
       [320,80,200]
    ];

    var widths = lengths[x];

    var layer2 = [400,500,200,530,150,400,470,480,170,90];
    var wid = layer2[x];
    var wid2 = 600 - wid;

    return '' +
        '<div>' +
        '<div style="width: 600px;" class="block red"></div>' +
        '</div>' +
        '<div class="row1">' +
        '<div style="width: ' + wid + 'px;" class="block orange"></div>' +
        '<div style="width: ' + wid2 + 'px;" class="block blue"></div>' +
        '</div>' +
        '<div class="row2">' +
        '<div style="width: ' + widths[0] + 'px;" class="block col0"></div>' +
        '<div style="width: ' + widths[1] + 'px;" class="block col1"></div>' +
        '<div style="width: ' + widths[2] + 'px;" class="block col2"></div>' +
        '</div>';
};


require(['https://cdn.jsdelivr.net/npm/chart.js'], function (chartjs) {

    var chartType = RT['chart_type'];
    var data_arr = RT['data_arr'];
    var opt = RT['opt'];
    var options = {
        "scales": {
            "x": {
                "stacked": true
            },
            "y": {
                "stacked": true
            }
        },
        onHover: function (event, chartElement) {
                // Check if the cursor is hovering over any part of the chart
                if (chartElement && chartElement.length > 0) {
                    // Display information about the hovered data point
                    var datasetIndex = chartElement[0].datasetIndex;
                    var index = chartElement[0].index;
                    var value = data.datasets[datasetIndex].data[index];

                    console.log('Hovered over Dataset ' + datasetIndex + ', Index ' + index + ', Value ' + value);
                } else {
                    // Cursor is not over any part of the chart
                    //console.log('No hover');
                var x = event.x;
                var y = event.y;

                    //console.log('aa Mouse coordinates - X: ' + x + ', Y: ' + y);
                    var xValue = myChart.scales['x'].getValueForPixel(event.x);
                    console.log('X Value on the X axis: ' + xValue);
                    document.getElementsByClassName("ver1")[0].innerHTML = xValue;
                    document.getElementsByClassName("flamegraph")[0].innerHTML = flamegraph( xValue );
                }
            },
        onMouseMove: function (event) {
                // Display X and Y coordinates of the mouse position
                var x = event.x;
                var y = event.y;

                console.log('Mouse coordinates - X: ' + x + ', Y: ' + y);
            },
        "plugins": {
            "tooltip": {
                "callbacks": {

                    "label": function (context) {
                        var label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed.y;

                        return "Meta: " + label;
                    },
                    // Title will be empty for this example
                    "title": function (context) {
                        return 'aff';
                    }
                }
            }
        }
    };

    var width = RT['width'];
    var height = RT['height'];

    element.append('<canvas width="' + width + '" height="' + height + '">s</canvas>' +
        '<table class="flameContainer">' +
        '<tr><td width="680px">' +
        '<div class="flamegraph">test33</div>' +
        '</td>' +
        '<td>' +
        'calicaliper.version: <div style="display: inline-block" class="ver1"></div>' +
        '<br></br>user: <div style="display: inline-block" class="ver1"></div>' +
        '</td>' +
        '</tr></table>');

    var ctx = element.children()[0].getContext("2d");

    var data = {
        "labels": [1, 2, 3, 4, 5, 6, 7, 8],
        "datasets": [
            {
                "label": "Main",
                "fillColor": "#0022ff",
                "strokeColor": "rgba(151,187,205,1)",
                "pointColor": "rgba(151,0,0,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)",
                "data": data_arr[0],
                "fill": "true",
                "backgroundColor": "#94ee81"
            },
            {
                "label": "LaGrange",
                "fillColor": "#00ee22",
                "strokeColor": "rgba(151,187,205,1)",
                "pointColor": "rgba(151,0,0,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)",
                "data": data_arr[1],
                "backgroundColor": "#8dc7ff"
            },
            {
                "label": "LaGrange Elements",
                "fillColor": "#ffce56",
                "strokeColor": "rgba(151,187,205,1)",
                "pointColor": "rgba(151,187,205,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,1)",
                "data": data_arr[2],
                "backgroundColor": "#b6bea0"
            }

        ]
    }


    console.dir(data);
    data.datasets[0].fill = true;
    data.datasets[1].fill = true;
    data.datasets[2].fill = true;

    var myChart = new Chart(ctx, {
        "type": "line",
        "data": data,
        "options": options
    });
});
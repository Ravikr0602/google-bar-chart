
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Languages');
      data.addRows([
        ['PHP', 90],
        ['Java', 66],
        ['MongoDB', 86],
        ['MySQL', 85],
        ['SQL', 90],
        ['JavaScript', 40],
        ['CSS', 75],
        ['HTML', 80]
      ]);

      // Instantiate and draw the chart.
      var chart = new google.visualization.ColumnChart(document.getElementById('barChart'));
      chart.draw(data, null);
    }
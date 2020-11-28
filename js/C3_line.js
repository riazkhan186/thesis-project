google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'CPR ( Contraceptive Rate)'],
    ['1975',  3],
    ['1983',  9],
    ['1985',  24],
    ['1989',  33],
    ['1991',  43],
    ['1993-4',  52],
    ['1996-7',  58],
    ['1996-7',  64],
    ['199-2000',  68],
    ['2004',  73],
    ['2007',  70],        
    ['2011',  84]      
  ]);

  var options = {
    title: ' Contraceptive Rate',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
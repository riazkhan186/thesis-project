// * Chapter 3 Bar chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', '1993', '1996', '1999', '2004', '2007', '2011'],
    ['Pills',  777, 838, 922,  1098, 1150, 1240.6],
    ['Injectables',  190, 220, 289, 348, 288, 482],
    ['Condoms',  157, 207,  250,  220, 260, 320],
    ['IUCDs',  157, 130,  110,  60, 80, 60],
    ['Implants',  30, 50, 65, 60, 52,  35],
    ['Sterilization (Female)',  450, 410, 390, 356, 346,  350],
    ['Sterilization (Male)', 48, 52, 35, 45, 52,59]        
  ]);

  var options = {
    title : 'Contraceptive Method',
    vAxis: {title: 'Married Women of Reproductive Age Per thousand'},
    hAxis: {title: 'Intrauterine Contraceptive Device'},
    seriesType: 'bars',
    series: {7: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
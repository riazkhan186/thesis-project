//* PIE Chart 3rd Chapter
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Pill',     50.1],
        ['Injectable',     23],
        ['Implant',     3.2],
        ['IUD',      1.1],
        ['Sterilization (Male)',  2.2],
        ['Sterilization (female)', 8.5],
        ['Condom (Male)',    11.9]
    ]);

    var options = {
        title: 'Modern Contraecption Method Mix Bangladesh Pie Chart',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}
    
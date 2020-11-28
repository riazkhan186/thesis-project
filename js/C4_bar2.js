// *Graph 2
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Neighbours", 0.3, "#eb8f34"],
        ["Friends", 0.6, "#a8eb34"],
        ["Mass Media", 4.5, "#3471eb"],
        ["Health Worker", 3.5, "color: #647B03"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "What was your first source of information about this service?",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_information_values"));
      chart.draw(view, options);
  }
// * Graph 4.4  Did you discuss with your husband/wife about family planning?
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Never", 4.3, "#6bb0e8"],
        ["Often", 2.5, "#e3aa39"],
        ["Sometimes", 3.5, "#7ab33d"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Did you discuss with your husband/wife about family planning?",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_family_planning_values"));
      chart.draw(view, options);
  }
// * Would you like to use family planning methods in future?
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Others", 0.3, "#eb8f34"],
        ["Don't Know", 0.5, "#a8eb34"],
        ["No", 4.5, "#3471eb"],
        ["Yes", 3.5, "color: #647B03"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Would you like to use family planning methods in future?",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_family_planning_methods_future"));
      chart.draw(view, options);
  }
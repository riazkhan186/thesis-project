// *If you do not apply family planning methods, what are the reasons?

google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Others", 36.3, "#eb8f34"],
        ["Not response", 4.3, "#a8eb34"],
        ["Want to have a child", 10.9, "#3471eb"],
        ["Due to pressure of mother in low", 1.0, "color: #647B03"],
        ["Due to pressure of husband", 6.6, "color: #c9c90f"],
        ["Due fear side effects", 31, "color: #6d3f9a"],
        ["Due to religious belief", 8.9, "color: #2f8f93"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "If you do not apply family planning methods, what are the reasons?",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_family_planning_methods_reasons"));
      chart.draw(view, options);
  }
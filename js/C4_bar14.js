// *grapg 1
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Other", 1, "#eb8f34"],
        ["Private employee", 25, "#a8eb34"],
        ["Govt. employee", 115, "#3471eb"],
        ["House servant", 6, "color: #647B03"],
        ["Housewife", 68, "#dddb34"],
        ["student", 3, "#3ee1ed"],
        ["Unemployed", 10, "color: #e4e3e9"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Present Occupation.",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_graph_14"));
      chart.draw(view, options);
  }

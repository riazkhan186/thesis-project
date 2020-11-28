// * Do you think your husband/wife approves of family planning?
google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Don’t know", 1.7, "#B9B966"],
        ["No She", 1, "#A8EB12"],
        ["No He", 2.5, "#89CF7A"],
        ["Yes She", 1.4, "color: #B24966"],
        ["Yes He", 2.2, "color: #C8AA56"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Do you think your husband/wife approves of family planning?",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_approves_family_planning"));
      chart.draw(view, options);
  }
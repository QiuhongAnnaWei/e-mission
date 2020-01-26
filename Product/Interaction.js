// google.charts.load('current', {packages: ['corechart']});
// google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  // Define the chart to be drawn.
  var day1, day2, day3, day4, day5, day6, day7;
  day1 = document.getElementById("day1").value;
  day2 = document.getElementById("day2").value;
  day3 = document.getElementById("day3").value;
  day4 = document.getElementById("day4").value;
  day5 = document.getElementById("day5").value;
  day6 = document.getElementById("day6").value;
  day7 = document.getElementById("day7").value;
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Carbon Emission (grams/day)'],
    ['day 1',  day1 * 1],
    ['day 2',  day2 * 1],
    ['day 3',  day3 * 1],
    ['day 4',  day4 * 1],
    ['day 5',  day5 * 1],
    ['day 6',  day6 * 1],
    ['day 7',  day7 * 1],
  ]);

  // Set chart options
  var options = {
    backgroundColor: { fill:'transparent' },
    titleTextStyle: {
      color: 'black',    // any HTML string color ('red', '#cc00cc')
      fontName: 'Yanone Kaffeesatz', // i.e. 'Times New Roman'
      fontSize: 23, // 12, 18 whatever you want (don't specify px)
    },
    title: 'Daily CO2 Emission for the Past 7 Days' ,
    curveType: 'none',
    legend: 'none',
    hAxis : {textStyle:
      {fontName: 'Yanone Kaffeesatz',
      fontSize: 18}},
      vAxis : {textStyle:
        {fontName: 'Yanone Kaffeesatz',
        fontSize: 18}}
      };


      // Instantiate and draw the chart.
      var chart = new google.visualization.LineChart(document.getElementById('chart'));
      chart.draw(data, options);
    }





    var meatSelect = "N/A";

    window.meat = function(e) {
      if (e.value === 'Lamb') {
        meatSelect = 'Lamb';
      }else if (e.value === 'Beef') {
        meatSelect = 'Beef';
      }else if (e.value === 'Pork') {
        meatSelect = 'Pork';
      }
    }

    var lambCount = 0;
    var beefCount = 0;
    var porkCount = 0;

    function meatdata()
    {
      if ((document.getElementById("meatgram").value * 1) > 0){
      if (meatSelect === 'Lamb') {
        lambCount = document.getElementById("meatgram").value;
        document.getElementById("Lamb").innerHTML = "Lamb (39.2 grams of CO2/gram): " + lambCount + " gram(s)";
      }else if (meatSelect === 'Beef') {
        beefCount = document.getElementById("meatgram").value;
        document.getElementById("Beef").innerHTML = "Beef (27.0 grams of CO2/gram): " + beefCount + " gram(s)";
      }else if (meatSelect === 'Pork') {
        porkCount = document.getElementById("meatgram").value
        document.getElementById("Pork").innerHTML = "Pork (12.1 grams of CO2/gram): " + porkCount + " gram(s)";
      }
    }
    }


    var dairySelect = "N/A"

    window.dairy = function(e) {
      if (e.value === 'Cheese') {
        dairySelect = 'Cheese';
      }else if (e.value === 'Milk') {
        dairySelect = 'Milk';
      }
    }


    var cheeseCount = 0;
    var milkCount = 0;

    function dairydata()
    {
      if ((document.getElementById("dairygram").value * 1) > 0){
      if (dairySelect === 'Cheese') {
        cheeseCount = document.getElementById("dairygram").value
        document.getElementById("Cheese").innerHTML = "Cheese (13.5 grams of CO2/gram): " + cheeseCount + " gram(s)";
      }else if (dairySelect === 'Milk') {
        milkCount = document.getElementById("dairygram").value
        document.getElementById("Milk").innerHTML = "Milk (1.9 grams of CO2/gram): " + milkCount + " gram(s)";
      }
    }
    }






    function calculate() {
      var total =    Math.round((lambCount * 39.2 + beefCount * 27.0 + porkCount * 12.1 +
        cheeseCount * 13.5 + milkCount * 1.9)*10)/10;
        document.getElementById("totalcount").innerHTML =  "Total Estimated CO2 Emission: " + total + " gram(s)";
        var annual =  Math.round((total * 365)*10)/10;
        document.getElementById("annualcount1").innerHTML =  "If this is your daily carbon emission, this accounts to"
        document.getElementById("annualcount2").innerHTML =  annual
        document.getElementById("annualcount3").innerHTML =  "gram(s) of CO2 emission a year";

        // Define the chart to be drawn.

        var data = google.visualization.arrayToDataTable([
          ["Identity", "Annual CO2 Emission (grams/year)"],
                    ["You", annual],
          ["Average American", 20000000],
          ["Average Global Citizen", 4000000],
        ]);

        // Set chart options
        var options = {
          backgroundColor: { fill:'transparent' },
          titleTextStyle: {
            color: 'black',    // any HTML string color ('red', '#cc00cc')
            fontName: 'Yanone Kaffeesatz', // i.e. 'Times New Roman'
            fontSize: 23, // 12, 18 whatever you want (don't specify px)
          },
          width: 650,
          height: 500,
          title: 'Annual Estimated CO2 Emission (grams/year)' ,
          legend: 'none',
            vAxis : {textStyle:
              {fontName: 'Yanone Kaffeesatz',
              fontSize: 18}},

              hAxis: { title: 'Data from https://www.sciencedaily.com/releases/2008/04/080428120658.htm',
              textStyle: {color: 'black', fontSize: 18, fontName: 'Yanone Kaffeesatz'} }
            };


            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
            chart.draw(data, options);
      }

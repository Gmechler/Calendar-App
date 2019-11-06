$(document).ready(function() {
  //   creates an array of hours from 8am to 5pm
  var workHrs = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

  // creates the dayOfTheWeek, Month, Date, format
  let m = moment();
  $("#currentDay").text(m.format("dddd[,] MMMM Do"));

  var currentHr = m.hour();
  console.log(currentHr);
  console.log(m.toString);

  var h = 0;

  function rowRender() {
    // let m = moment();

    var i = 0;
    for (r = 0; r < 10; r++) {
      //   dynamicaly create new calander rows//
      var newRow = $("<div>").attr("class", "row");
      //   creates the hour,textarea and button columns//
      var hrCol = $("<div>")
        .attr("class", "col-2 mt-4 time-block")
        .text(workHrs[i] + ":00");
      var aptCol = $("<textarea>").attr("class", "col-8 first entertext e9");
      var btnCol = $("<button>").attr(
        "class",
        "col-1 saveBtn fa fa-calendar-check-o b9"
      );
      //   appends the columns to the new row//
      newRow.append(hrCol, aptCol, btnCol);
      // appends the new row to the main container add id="mainContainer" to the top container.//
      $("#mainContainer").append(newRow);
      i++;
    }
  }
  rowRender();
});

$(document).ready(function() {
  // creates the dayOfTheWeek, Month, Date, format
  let m = moment();
  $("#currentDay").text(m.format("dddd[,] MMMM Do"));

  var currentHr = m.hour();
  console.log(currentHr);

  for (r = 0; r < 10; r++) {
    //   dynamicaly create new calander rows//
    var newRow = $("<div>").attr("class", "row");
    //   creates the hour,textarea and button columns//
    var hrCol = $("<div>")
      .attr("class", "col-2 mt-4 time-block")
      .text("9:00 AM");
    var aptCol = $("<textarea>").attr("class", "col-8 first entertext e9");
    var btnCol = $("<button>").attr(
      "class",
      "col-1 saveBtn fa fa-calendar-check-o b9"
    );
    //   appends the columns to the new row//
    newRow.append(hrCol, aptCol, btnCol);
    // appends the new row to the main container add id="mainContainer" to the top container.//
    $("#mainContainer").append(newRow);
  }
});

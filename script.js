$(document).ready(function() {
  // creates the dayOfTheWeek, Month, Date, format
  let m = moment();
  $("#currentDay").text(m.format("dddd[,] MMMM Do"));

  //   dynamicaly create new calander rows//
  var newRow = $("<div>").attr("class", "row");
  //   creates the hour,textarea and button columns//
  var hrCol = $("<div>")
    .attr("class", "col-2 mt-4 time-block")
    .text("9:00 AM");
  var aptCol = $("<textarea>").attr("class", "col-8 first entertext e9");
  var btnCol = $("<btn>").attr(
    "class",
    "col-1 saveBtn fa fa-calendar-check-o b9"
  );
  //   appends the columns to the new row//
  newRow.append(hrCol, aptCol, btnCol);
  // appends the new row to the main container add id="mainContainer" to the top container.//
  $("#mainContainer").append(newRow);

  //   var newRow = $("<div>");
  //   var hrCol = $("<div>").text("col1");
  //   var aptCol = $("<div>").text("col2");
  //   var saveCol = $("<div>").text("col3");

  //   newRow.append(hrCol, aptCol, saveCol);
  //   $("#calRow").append(newRow);

  //   newRow.attr("class", "bg-success");
});

// figure out how to pull out parts of the moment.js year, "hr",

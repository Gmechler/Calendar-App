$(document).ready(function() {
  // current date a nd time
  let m = moment();
  // create from ISO
  console.log(m);
  //   dynamicaly create new calander rows//

  var newRow = $("<div>");
  var hrCol = $("<div>").text("col1");
  var aptCol = $("<div>").text("col2");
  var saveCol = $("<div>").text("col3");

  newRow.append(hrCol, aptCol, saveCol);
  $("#calRow").append(newRow);

  newRow.attr("class", "bg-success");
});

// figure out how to pull out parts of the moment.js year, "hr",

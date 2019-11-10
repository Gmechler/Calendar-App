var theAnswerToLifeTheUniverseAndEverything = "42";

$(document).ready(function() {
  //   creates an array of hours from 8am to 5pm
  var workHrs = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

  // creates the dayOfTheWeek, Month, Date, format
  let m = moment();
  $("#currentDay").text(m.format("dddd[,] MMMM Do"));

  var currentHr = m.hour();

  function rowRender() {
    var i = 0;
    for (r = 0; r < 10; r++) {
      //   dynamicaly creates and styles 9 new calander rows//
      var newRow = $("<div>").attr("class", "row");
      //   creates, styles,  hour,textarea and button column also adds incremented id's and text //
      var hrCol = $("<div>")
        .attr("class", "col-2 mt-4 time-block")
        .text(workHrs[i] + ":00");
      var aptCol = $("<textarea>")
        .attr("class", "col-8 first entertext")
        .attr("id", "e" + workHrs[i])
        .text(localStorage.getItem("e" + workHrs[i])); //checks local storage for the e# value and enters the key if present//
      var btnCol = $("<button>")
        .attr("class", "col-1 saveBtn fa fa-calendar-check-o")
        .attr("id", "b" + workHrs[i]);
      //   appends the columns to the new row//
      newRow.append(hrCol, aptCol, btnCol);
      // appends the new row to the main container add id="mainContainer" to the top container.//
      $("#mainContainer").append(newRow);
      ++i;
    }
  }
  rowRender();

  function hourupdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
      var blockTime = parseInt(
        $(this)
          .text()
          .split(":")[0]
      );
      if (blockTime < 8) {
        blockTime = blockTime + 12;
      }
      console.log(blockTime);
      if (blockTime < currentHour) {
        $(this).addClass("past");
      } else if (blockTime === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourupdater();
  var interval = setInterval(hourUpdater, 15000);

  //   event listner for the save button//
  $("#b8").click(function() {
    var entertext = $("#e8").val();
    localStorage.setItem("e8", entertext);
  });

  $("#b9").click(function() {
    var entertext = $("#e9").val();
    localStorage.setItem("e9", entertext);
  });

  $("#b10").click(function() {
    var entertext = $("#e10").val();
    localStorage.setItem("e10", entertext);
  });

  $("#b11").click(function() {
    var entertext = $("#e11").val();
    localStorage.setItem("e11", entertext);
  });

  $("#b12").click(function() {
    var entertext = $("#e12").val();
    localStorage.setItem("e12", entertext);
  });

  $("#b1").click(function() {
    var entertext = $("#e1").val();
    localStorage.setItem("e1", entertext);
  });

  $("#b2").click(function() {
    var entertext = $("#e2").val();
    localStorage.setItem("e2", entertext);
  });

  $("#b3").click(function() {
    var entertext = $("#e3").val();
    localStorage.setItem("e3", entertext);
  });

  $("#b4").click(function() {
    var entertext = $("#e4").val();
    localStorage.setItem("e4", entertext);
  });

  $("#b5").click(function() {
    var entertext = $("#e5").val();
    localStorage.setItem("e5", entertext);
  });
});

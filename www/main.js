// For Updating Data in html (View)
function lCheck() {
  if (localStorage.getItem("uScore")) {
    $("#score").html(parseInt(localStorage.getItem("uScore")));
  } else {
    $("#score").html(0);
  }
}

// Updating User Score if win
function sCoreUpdate() {
  if (localStorage.getItem("uScore")) {
    let uScore = parseInt(localStorage.getItem("uScore"));
    localStorage.setItem("uScore", ++uScore);
  } else {
    localStorage.setItem("uScore", 1);
  }
}

// Attempt updates every time user click any image
function attemptUpdate() {
  if (localStorage.getItem("attempts")) {
    let attempts = parseInt(localStorage.getItem("attempts"));
    localStorage.setItem("attempts", ++attempts);
  } else {
    localStorage.setItem("attempts", 1);
  }
}

// Displaying final score after every 10 attempts
function finalScore() {
  let sContent = `Your Score:  ${localStorage.getItem("uScore")}`;
  $("#win").html(
    "<strong>Game Finish <br>" + sContent + "<br> Want to Play Again!</strong>"
  );
  $("#win").addClass("win");
  lCheck();
  localStorage.removeItem("attempts");
  localStorage.removeItem("uScore");
}

// Calling lCheck for initial scores based on local storage
lCheck();

// Function for calling on every radio button as image clicked
$("input[name='type']").click(function () {
  var radioValue = $("input[name='type']:checked").val();
  // Sending post request to the server with radio value as data
  $.post(
    "element",
    { body: radioValue, dataType: "xml", type: radioValue },
    function (xData, status) {
      attemptUpdate();
      let attempts = localStorage.getItem("attempts");
      console.log(xData);
      if (xData.winner == "You") {
        sCoreUpdate();
      }
      if (xData.winner == "Draw") {
        $("#win").html(
          `Attempt: <strong>${attempts}</strong>/10 <br> <strong>It's Draw</strong>`
        );
        $("#win").addClass("win");
      } else {
        $("#win").html(
          `Attempt:  <strong>${attempts}</strong>/10 <br> Winner: <strong>${xData.winner}</strong> <br> Type: <strong>${xData.type}</strong>`
        );
        $("#win").addClass("win");
      }
      if (attempts >= 10) {
        finalScore();
      } else {
        lCheck();
      }
    }
  );
});

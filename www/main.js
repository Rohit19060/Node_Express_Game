function lCheck() {
  if (localStorage.getItem("uScore")) {
    $("#score").html(parseInt(localStorage.getItem("uScore")));
  } else {
    $("#score").html(0);
  }
}

function sCoreUpdate() {
  if (localStorage.getItem("uScore")) {
    let uScore = parseInt(localStorage.getItem("uScore"));
    localStorage.setItem("uScore", ++uScore);
  } else {
    localStorage.setItem("uScore", 1);
  }
}

function attemptUpdate() {
  if (localStorage.getItem("attempts")) {
    let attempts = parseInt(localStorage.getItem("attempts"));
    localStorage.setItem("attempts", ++attempts);
  } else {
    localStorage.setItem("attempts", 1);
  }
}

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

lCheck();
$("input[name='type']").click(function async() {
  var radioValue = $("input[name='type']:checked").val();
  $.post(
    "element",
    { body: radioValue, dataType: "xml", type: radioValue },
    function await(xData, status) {
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

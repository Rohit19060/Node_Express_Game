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
  let sContent = `Your Score: ${localStorage.getItem("uScore")}`;
  localStorage.removeItem("attempts");
  localStorage.removeItem("uScore");
  alert("Game Finish\n" + sContent);
  lCheck();
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
        alert(`Attempt: ${attempts}/10\nIt's Draw`);
      } else {
        alert(
          `Attempt: ${attempts}/10\nWinner: ${xData.winner}\nType: ${xData.type}`
        );
      }
      if (attempts >= 10) {
        finalScore();
      }
      lCheck();
    }
  );
});

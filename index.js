// --------------------------------------------
for (var i = 0; i < 9; i++) {
  var count = 0;
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    if (count % 2 === 0) {
      this.innerHTML = '<h1 style="color:red">X</h1>';
      document.getElementById("result").innerHTML = "player 0 turn";
    } else {
      this.innerHTML = '<h1 style="color:#3dcf03">0</h1>';
      document.getElementById("result").innerHTML = "player X turn";
    }
    count++;
  })
}

// -----------------------------------------------------------------------------
for (var i = 0; i < 9; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", my_func);
}

function my_func() {
  var b1 = document.getElementById("btn1").textContent;
  var b2 = document.getElementById("btn2").textContent;
  var b3 = document.getElementById("btn3").textContent;
  var b4 = document.getElementById("btn4").textContent;
  var b5 = document.getElementById("btn5").textContent;
  var b6 = document.getElementById("btn6").textContent;
  var b7 = document.getElementById("btn7").textContent;
  var b8 = document.getElementById("btn8").textContent;
  var b9 = document.getElementById("btn9").textContent;

  if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("result").innerHTML = "player X won!";
  }
  // --------------------------------------------------------------------

  if (b1 == '0' && b2 == '0' && b3 == '0') {
    // alert("i");
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("result").innerHTML = "player 0 won!";
  }

  // for draw-------------
  else if ((b1 == "X" || b1 == "0") && (b2 == "X" || b2 == "0") && (b3 == "X" || b3 == "0") 
        && (b4 == "X" || b4 == "0") && (b5 == "X" || b5 == "0") && (b6 == "X" || b6 == "0")
        && (b7 == "X" || b7 == "0") && (b8 == "X" || b8 == "0") && (b9 == "X" || b9 == "0")) {
    document.getElementById("result").innerHTML = "Match Tie";
  }

}

// reset
document.querySelector(".resetbtn").addEventListener("click", function() {
  // window.alert("i got clicked");
  document.getElementById("btn1").innerHTML = "";
  document.getElementById("btn2").innerHTML = "";
  document.getElementById("btn3").innerHTML = "";
  document.getElementById("btn4").innerHTML = "";
  document.getElementById("btn5").innerHTML = "";
  document.getElementById("btn6").innerHTML = "";
  document.getElementById("btn7").innerHTML = "";
  document.getElementById("btn8").innerHTML = "";
  document.getElementById("btn9").innerHTML = "";
  document.getElementById("result").innerHTML = "start game!";
  count = 0;
})

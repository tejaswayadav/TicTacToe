console.log("connected");

var reset_btn = document.querySelector('#bt');
var squares = document.querySelectorAll('td');


function ClearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  console.log("Board Cleared");
}

function CheckAndFill() {
  if (this.textContent === ""){
    this.textContent = 'x';
  } else if (this.textContent === "x") {
    this.textContent = 'o';
  } else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', CheckAndFill);
}

reset_btn.addEventListener('click', ClearBoard);

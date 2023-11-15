function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "myNav") {
      x.className += " responsive";
    } else {
      x.className = "myNav";
    }
  }

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
console.log('test');

function hideShowDiv() {
  var x = document.getElementById("show-hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
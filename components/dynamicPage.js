if (localStorage.getItem("loggedIn")) {
  var ulElem = document.getElementById("nav");
  ulElem.removeChild(ulElem.childNodes[7]);
}

if (!localStorage.getItem("loggedIn")) {
  var ulElem = document.getElementById("nav");
  ulElem.removeChild(ulElem.childNodes[9]);
}

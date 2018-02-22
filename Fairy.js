function dropDownFunction() {
    document.getElementById("drop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.footer__menu__currency__dropdown--button')) {

    var dropdowns = document.getElementsByClassName("footer__menu__currency__dropdown--list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
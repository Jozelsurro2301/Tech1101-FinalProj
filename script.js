// FUNCTION TO COLLAPSE THE HEADERS ON THE HTML CHEAT SHEAT
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// FUNCTION TO COLLAPSE THE HEADERS ON THE CSS CHEAT SHEAT
var coll1 = document.getElementsByClassName("collapsible1");
var j;

for (j = 0; j < coll1.length; j++) {
  coll1[j].addEventListener("click", function() {
    this.classList.toggle("active1");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//FUNCTION TO DISPLAY RESULTS OF THE HTML STATEMENTS
function hover(element) {
  var image = element.nextElementSibling;
  image.style.display = "block";
  image.style.marginTop = "3vh";
  image.style.position = "relative";
}

//FUNCTION TO HIDE THE RESULTS OF THE HTML STATEMENTS
function hoverout(element) {
  element.nextElementSibling.style.display = "none";
}


//GET THE CURRENT YEAR THEN DISPLAYS ON THE FOOTER COPYRIGHT PART
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear




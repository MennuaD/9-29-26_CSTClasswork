//count = 0;
//day = 0;


function includeHTML($f) {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          if($f){ //Checking for reference
            $f(elmnt);            
          }
          //console.log({elmnt, date: new Date()});
          includeHTML($f);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

const months = {"0" : "Jan" , "dys" : 31,
                "1" : "Feb",
                "2" : "Mar",
                "3" : "Apr",
                "4" : "May",
                "5" : "Jun",
                "6" : "Jul",
                "7" : "Aug",
                "8" : "Sep",
                "9" : "Oct",
                "10" : "Nov",
                "11" : "Dec",
}


function updateGrid($element){
    const caption = $element.querySelector("caption");
    const month = $element.dataset.month;
    caption.innerText = months[month];
    console.log({caption});

    const tds = [...$element.querySelectorAll("tbody td")];
    tds.forEach(e => {
      e.innerText = month;
    });
}


function initialize(){
  months;
  includeHTML(updateGrid);




}
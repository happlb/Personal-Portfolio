// JavaScript source code
// start up functionality 
window.onload = function () {
    startTab();
};

function startTab() {
    document.getElementById("defaultOpen").click();

}

  //opening tabs logic  
function openTab(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * .01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});




/*portfolio tab functionality*/
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontentP, tablinksP;

    // Get all elements with class="tabcontent" and hide them
    tabcontentP = document.getElementsByClassName("tabcontentP");
    for (i = 0; i < tabcontentP.length; i++) {
        tabcontentP[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinksP = document.getElementsByClassName("tablinksP");
    for (i = 0; i < tablinksP.length; i++) {
        tablinksP[i].className = tablinksP[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
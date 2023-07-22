fetch('nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

function toggleMenu() {
    var wrapperMenu = document.querySelector('.menu-icon');
    var menuDiv = document.getElementById('menu-div');
    menuDiv.classList.toggle('menu-visible');
    wrapperMenu.classList.toggle('open');   

}

// Get the button element
const backToTopButton = document.getElementById("top");
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

function changeContent(pageUrl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("page-box").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", pageUrl, true);
  xhttp.send();
}


// Get the menu bar element
const menuBar = document.getElementsByClassName(".nav-first");

// Variable to store the previous scroll position
let prevScrollPos = window.pageYOffset;

// Function to handle the scroll event
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    menuBar.classList.remove("menu-hidden");
  } else {
    // Scrolling down
    menuBar.classList.add("menu-hidden");
  }

  prevScrollPos = currentScrollPos;
}

// Event listener for the scroll event
window.addEventListener("scroll", handleScroll);




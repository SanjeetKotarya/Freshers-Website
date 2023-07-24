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




//STUDENT GOVERNANCE
function openTab(tabId) {
  const tabContents = document.querySelectorAll('.tabcontent');
  tabContents.forEach(tab => tab.classList.remove('active-tab'));

  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.add('active-tab');

  const tabLinks = document.querySelectorAll('.tablinks');
  tabLinks.forEach(link => link.classList.remove('active-link'));

  const selectedTabLink = document.querySelector(`[data-tab="${tabId}"]`);
  selectedTabLink.classList.add('active-link');
}

// Event listeners for tab links
document.querySelectorAll('.tablinks').forEach(link => {
  link.addEventListener('click', () => {
      const tabId = link.getAttribute('data-tab');
      openTab(tabId);
  });
});

// Open the default tab on page load
openTab('slc');
openTab('dep');

//STUDENT GOVERNANCE End

// HELP PAGE
// Function to handle search in FAQ
function searchFAQ() {
  const input = document.getElementById('search').value.toLowerCase();
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
      const questionText = question.querySelector('h3').innerText.toLowerCase();
      const display = questionText.includes(input) ? 'block' : 'none';
      question.style.display = display;
  });
}


function toggleAnswerVisibility(parent) {
  const answer = parent.querySelector('.answer');
  if (answer.style.height === '0px' || answer.style.height === '') {
      answer.style.height = 'auto';
  } else {
      answer.style.height = '0px';
  }
}

// HELP PAGE END


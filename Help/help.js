// Get all list items with the class "accordion-list"
const listItems = document.querySelectorAll('.accordion-list li');

// Function to toggle the visibility of the answer
function toggleAnswerVisibility() {
  const answer = this.querySelector('.answer');
  answer.classList.toggle('show-answer'); // Use classList.toggle to toggle the 'show-answer' class
}

// Add a click event listener to each list item
listItems.forEach(item => item.addEventListener('click', toggleAnswerVisibility));

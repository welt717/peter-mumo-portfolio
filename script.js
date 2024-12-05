// Theme Toggle
                    
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Skills Carousel


// Typing Effect
const typingElement = document.getElementById('typing');
const text = "Peter Mumo, Web Developer.";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text[index];
    index++;
    setTimeout(typeText, 100);
  }
}
typeText();


// FAQ Dropdown Functionality
                    
                      
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
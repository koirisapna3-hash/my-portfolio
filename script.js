// Toggle the mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

if (hamburger && navLinksMenu) {
  hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('open');
  });
}

// Automatically animate the skill progress bars when the knowledge page loads
// This replaces the old showPage triggers
if (window.location.pathname.includes('knowledge.html')) {
  animateSkills();
}

function animateSkills() {
  setTimeout(() => {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 100);
}

// Handle the contact form submission logic
function handleSubmit() {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  const sendBtn = document.getElementById('send-btn');
  const formSuccess = document.getElementById('form-success');

  if (sendBtn) sendBtn.textContent = 'Sending...';
  
  setTimeout(() => {
    if (sendBtn) sendBtn.style.display = 'none';
    if (formSuccess) formSuccess.style.display = 'block';
    
    ['fname','lname','email','subject','message'].forEach(id => {
      const element = document.getElementById(id);
      if (element) element.value = '';
    });
  }, 1000);
}
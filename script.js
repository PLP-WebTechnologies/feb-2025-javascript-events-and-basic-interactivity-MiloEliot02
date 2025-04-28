// Select the button element
const myButton = document.getElementById('myButton');

// Change text and color on click
myButton.addEventListener('click', () => {
  myButton.textContent = myButton.textContent === 'Click Me' ? 'Clicked!' : 'Click Me';
  myButton.style.backgroundColor = myButton.style.backgroundColor === 'green' ? '#007BFF' : 'green';
});

// Hover effects
myButton.addEventListener('mouseover', () => {
  myButton.style.backgroundColor = 'lightblue';
  myButton.style.color = 'white';
});

myButton.addEventListener('mouseout', () => {
  myButton.style.backgroundColor = '#007BFF';
  myButton.style.color = 'white';
});

// Keypress detection
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  if (event.key === 'Enter') {
    alert('You pressed Enter!');
  }
});

// Bonus: Secret action for double-click
myButton.addEventListener('dblclick', () => {
  alert('Secret double-click action activated!');
});

// Bonus: Secret action for long press
let pressTimer;
myButton.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Secret long press action activated!');
  }, 1000); // 1 second long press
});

myButton.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Array of image sources
const images = [
  '/unsplash3.jpg',
  '/pic4.jpg',
  '/pic6.jpg',
  '/pic5.jpg'
];

let currentImageIndex = 0;

// Select the gallery image and buttons
const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Function to update the image
function updateImage() {
  galleryImage.src = images[currentImageIndex];
}

// Function to trigger confetti
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
  triggerConfetti(); // Trigger confetti on button press
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
  triggerConfetti(); // Trigger confetti on button press
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabContents.forEach(content => {
      content.style.display = content.id === targetTab ? 'block' : 'none';
    });
  });
});

// Form validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time feedback for name
nameInput.addEventListener('input', () => {
  nameError.textContent = nameInput.value.trim() === '' ? 'Name is required.' : '';
});

// Real-time feedback for email
emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent = emailPattern.test(emailInput.value) ? '' : 'Please enter a valid email address.';
});

// Real-time feedback for password
passwordInput.addEventListener('input', () => {
  passwordError.textContent = passwordInput.value.length < 8 ? 'Password must be at least 8 characters.' : '';
});

// Form submission validation
form.addEventListener('submit', (event) => {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
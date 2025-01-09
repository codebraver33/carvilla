// nav apperence
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.navbar .logo');
  const menuToggle = document.querySelector('.menu-toggle'); // Added to target the toggle
  // Check if scroll is beyond 50px
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      menuToggle.classList.add('scrolled'); // Add 'scrolled' to the toggle when scrolling
  } else {
      navbar.classList.remove('scrolled');
      menuToggle.classList.remove('scrolled'); // Remove 'scrolled' from the toggle
  }
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show or hide the nav
});


// featured cars js
let cars = document.querySelectorAll(".car-item");
let currentCar = 0;
function autoSlideCars() {
  cars.forEach((car, index) => {
    car.style.display = index === currentCar ? "block" : "none";
  });
  currentCar = (currentCar + 1) % cars.length;
}
autoSlideCars(); // Initial call to show the first car
setInterval(autoSlideCars, 3000); // Slide every 3 seconds


//search icon 
document.getElementById('search-icon').addEventListener('click', function() {
  alert('Thank u for visiting our website❤️,Continue to descover best cars company'
    );
  // Add further search logic here, e.g., filtering the car list
});

//contact form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const order = form.querySelector('textarea[name="order"]').value.trim();
  // Check if all fields are filled
  if (!name || !email || !order) {
    event.preventDefault(); // Prevent submission if fields are empty
  } else {
    // Redirect to thank.html if all fields are filled
    event.preventDefault(); // Stop the default form action
    window.location.href = "thank.html";
  }
});
//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 4000); // 4000 milliseconds = 4 seconds
});
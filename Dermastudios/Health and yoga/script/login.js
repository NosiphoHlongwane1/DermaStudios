document.addEventListener("DOMContentLoaded", function () {
    // Membership form submission
    const joinForm = document.getElementById("join-form");
    const successMessage = document.getElementById("join-success");
  
    if (joinForm) {
      joinForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
  
        // Display success message
        successMessage.style.display = "block";
  
        // Clear form fields
        joinForm.reset();
  
        // Hide success message after 3 seconds
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      });
    }
  
    // Booking button functionality
    const bookButtons = document.querySelectorAll(".book-now");
  
    bookButtons.forEach((button) => {
      button.addEventListener("click", function () {
        alert("Your class has been successfully booked!");
      });
    });
  
    // Mobile Navbar Toggle
    const hamburger = document.querySelector(".hamburger");
    const navbarNav = document.querySelector("#navbarNav");
  
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        navbarNav.classList.toggle("show");
      });
    }
  });
  
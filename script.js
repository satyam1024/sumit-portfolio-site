

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smoothly scroll to the target section
        gsap.to(window, {
            duration: 1,  // Animation duration in seconds
            scrollTo: targetSection,  // Scroll to the target section
            ease: "power2.inOut"  // Easing for smoothness
        });
    });
});
//smooth scroll

  // Register GSAP plugins
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // Smooth scrolling for navigation links
  const navi = document.querySelectorAll('.common');

  navi.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Scroll to the target section smoothly
      gsap.to(window, {
        duration: 1.5, // Duration in seconds
        scrollTo: {
          y: targetSection, // Scroll to the section
          offsetY: 50, // Offset for any fixed header
        },
        ease: "power2.inOut", // Easing for smoothness
      });
    });
  });

  // Optional: Add a smoother effect for natural scrolling
  gsap.to("body", {
    scrollTrigger: {
      trigger: "body", // The entire body
      start: "top top", // Start at the top
      end: "bottom bottom", // End at the bottom
      scrub: true, // Smoothens natural scroll
    },
  });

// script.js
const carousel = document.querySelector(".carousel");
const firstItem = carousel.firstElementChild.cloneNode(true);
const lastItem = carousel.lastElementChild.cloneNode(true);

// Clone first and last items for seamless looping
carousel.appendChild(firstItem);
carousel.insertBefore(lastItem, carousel.firstChild);

// Adjust carousel animation dynamically
carousel.style.transition = "none";
carousel.style.transform = `translateX(-300px)`; // Offset by one item

let index = 1;
setInterval(() => {
  index++;
  carousel.style.transition = "transform 1s ease-in-out";
  carousel.style.transform = `translateX(-${index * 300}px)`;

  carousel.addEventListener("transitionend", () => {
    if (index === carousel.children.length - 1) {
      index = 1;
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-300px)`;
    } else if (index === 0) {
      index = carousel.children.length - 2;
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${index * 300}px)`;
    }
  });
}, 10000); // Adjust timing for auto-slide

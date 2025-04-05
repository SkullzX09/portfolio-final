// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// GSAP Timeline for the Hero Section
gsap.timeline({ defaults: { ease: "power3.out" } })
  .from("#hero-title", { duration: 1.5, y: -50, opacity: 0 })
  .from(".tagline", { duration: 1.5, y: 50, opacity: 0 }, "-=1")
  .from(".btn", { duration: 1, scale: 0.8, opacity: 0, ease: "back.out(1.7)" }, "-=0.5");

// Advanced ScrollTrigger Animations for each section (excluding About Me section scrolling)
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section, header").forEach(section => {
  if (!section.classList.contains("about-section")) { // Exclude About Me section
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "restart none none none", // Restart animation every time the section enters the viewport
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }
});

// Text and Profile Animations for About Me Section
gsap.from(".about-text p", { 
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%",
    toggleActions: "restart none none none", // Restart animation every time the section enters the viewport
  },
  opacity: 0,
  y: 30, // Slide up effect
  duration: 1.2,
  ease: "power4.out", // Smooth easing
  stagger: 0.3, // Staggered animation for each paragraph
});

gsap.from(".profile-wrapper", {
  scrollTrigger: {
    trigger: ".profile-wrapper",
    start: "top 80%",
    toggleActions: "restart none none none", // Restart animation every time the section enters the viewport
  },
  opacity: 0,
  scale: 0.9, // Subtle zoom-in effect
  duration: 1.5,
  ease: "power4.out",
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute("href"));
    targetEl.scrollIntoView({ behavior: "smooth" });
  });
});


// Initialize ParticlesJS for My Work Section
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Initialize VanillaTilt for Project Cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15, // Maximum tilt angle
  speed: 400, // Speed of the tilt effect
  glare: true, // Enable glare effect
  "max-glare": 0.5, // Maximum glare opacity
});

// Initialize ParticlesJS for Certifications Section
particlesJS("particles-certifications", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Initialize VanillaTilt for Certification Cards
VanillaTilt.init(document.querySelectorAll(".certification-card"), {
  max: 15, // Maximum tilt angle
  speed: 400, // Speed of the tilt effect
  glare: true, // Enable glare effect
  "max-glare": 0.5, // Maximum glare opacity
});

// Initialize Vanta.js NET effect
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x16213e, // Primary color
  backgroundColor: 0x0d0d0d, // Background color
  points: 10.0,
  maxDistance: 20.0,
  spacing: 15.0,
});

// GSAP Animations for Social Icons
document.querySelectorAll(".social-icon").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, { scale: 1.2, duration: 0.3, ease: "power3.out" });
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, { scale: 1, duration: 0.3, ease: "power3.out" });
  });
});


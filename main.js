const menuBtn = document.querySelector(".navigation__mobile-toggle");
const navLinks = document.querySelector(".navigation__list");
const menuBtnSpans = menuBtn.querySelectorAll("span");

// Toggle menu on mobile
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  if (isOpen) {
    menuBtnSpans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    menuBtnSpans[1].style.opacity = "0";
    menuBtnSpans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
  } else {
    menuBtnSpans[0].style.transform = "none";
    menuBtnSpans[1].style.opacity = "1";
    menuBtnSpans[2].style.transform = "none";
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("open");
    menuBtnSpans[0].style.transform = "none";
    menuBtnSpans[1].style.opacity = "1";
    menuBtnSpans[2].style.transform = "none";
  }
});

// Close menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnSpans[0].style.transform = "none";
    menuBtnSpans[1].style.opacity = "1";
    menuBtnSpans[2].style.transform = "none";
  }
});

// Add active class to current page link
const currentPage = window.location.pathname.split("/").pop();
const navItems = navLinks.querySelectorAll("a");
navItems.forEach(item => {
  if (item.getAttribute("href").includes(currentPage)) {
    item.classList.add("active");
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero__image-wrapper img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero__actions", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image-wrapper", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subtitle", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__title", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__details", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".about__interests-title", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".about__interests span", {
  ...scrollRevealOption,
  delay: 3000,
  interval: 200,
});

ScrollReveal().reveal(".journey__card", {
  ...scrollRevealOption,
  interval: 500,
});

const mixer = mixitup(".portfolio__grid");

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Effet 3D amélioré pour la section intro
const introContainer = document.querySelector('.section--about');
const introImage = document.querySelector('.about__image-wrapper');
const introContent = document.querySelector('.about__content');

if (introContainer && introImage && introContent) {
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Animation fluide
  function animate() {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    introImage.style.transform = `
      perspective(2000px)
      rotateY(${-targetX * 10}deg)
      rotateX(${targetY * 10}deg)
      translateZ(30px)
    `;

    // Effet de parallaxe sur le contenu
    introContent.style.transform = `
      translateZ(0)
      translateX(${-targetX * 5}px)
      translateY(${-targetY * 5}px)
    `;

    requestAnimationFrame(animate);
  }

  // Suivre le mouvement de la souris
  introContainer.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - introContainer.getBoundingClientRect().left - introContainer.offsetWidth / 2;
    mouseY = e.clientY - introContainer.getBoundingClientRect().top - introContainer.offsetHeight / 2;
  });

  // Réinitialiser la position au départ de la souris
  introContainer.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });

  // Démarrer l'animation
  animate();

  // Ajouter des effets de survol sur les éléments
  const introElements = document.querySelectorAll('.about__details .about__info, .about__interests .about__interest-tag');
  introElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateZ(50px) scale(1.1)';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateZ(0) scale(1)';
    });
  });
}

// 3D interactif pour les cartes de services, clients et le formulaire de contact
const sectionsWith3DEffect = document.querySelectorAll('.section--services .service__card, .section--clients .client__card, .section--contact .contact__form');
sectionsWith3DEffect.forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    element.style.transform = `
      perspective(1000px)
      rotateY(${-x * 15}deg)
      rotateX(${y * 15}deg)
      scale(1.02)
    `;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Logic for active navigation link based on current page
const currentPath = window.location.pathname;
const navLinksList = document.querySelectorAll('.nav__link');

navLinksList.forEach(link => {
  // Handle root index.html
  if (link.getAttribute('href') === 'index.html' && (currentPath === '/' || currentPath.endsWith('/index.html'))) {
    link.classList.add('active');
  } 
  // Handle other pages (e.g., service.html, intro.html, client.html, pages/contact.html)
  else if (currentPath.includes(link.getAttribute('href').replace('../', ''))) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

/* Hamburger toggle functionality */
function clickHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) return;

    const hamburgerIcon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
      } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
      }
    });
}

function loadHeader(callback) {
  fetch('/learn-spanish/pages/nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      setTimeout(() => {
        clickHamburgerMenu();
        openContactForm();
        if (callback) callback();
      }, 0);
    })
    .catch(err => console.error('Nav bar load failed:', err));
}

function loadContactModal() {
  fetch('/learn-spanish/components/contact-modal.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('contact-modal-placeholder').innerHTML = data;

      setTimeout(() => {
        formSubmission();
        openContactForm();
      }, 0);
    })
    .catch(err => console.error('Modal load failed:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeader(() => {
    scrollSpyNavHighlight();
  });
  loadContactModal();
});

function scrollSpyNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.remove("nav-active");

          if (link.getAttribute("href").includes(`#${id}`)) {
            link.classList.add("nav-active");
          }
        });
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', scrollSpyNavHighlight);

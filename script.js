



// -------------------------------toggle icon navbar----------------------------/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("hide");
  navbar.classList.toggle("active");
};

// --------------------------------scroll section active link-----------------------/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // --------------------------------- sticky navbar  -----------------------------------------/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ------------------------ remove toggle icon and navbar when click navbar link (scroll) ------------------------//
  menuIcon.classList.remove("bx-x");
  navbar.classList.add("hide");
  navbar.classList.remove("active");
};

// ------------------------------------  scroll reveal  -----------------------------------------/
ScrollReveal({
  reset: true,
  distance: "90px",
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(" .heading, .heading2, .about-img", { origin: "top" });
ScrollReveal().reveal(".about-content,.social-media", { origin: "bottom" });

// ------------------------------------   top buttnn---------------------------------------
var btn = $("#button");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

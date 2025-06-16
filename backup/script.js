// แสดงข้อความใน console เพื่อตรวจว่า script ทำงาน
console.log("Welcome to my portfolio!");

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth <= 768) {
    if (currentScroll > lastScrollTop && currentScroll > 80) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
  } else {
    if (currentScroll > 100) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav'); // ✅ ใช้ class

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



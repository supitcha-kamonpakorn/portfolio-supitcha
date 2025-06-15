// แสดงข้อความใน console เพื่อตรวจว่า script ทำงาน
console.log("Welcome to my portfolio!");

// ย่อ header เมื่อ scroll ลง
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

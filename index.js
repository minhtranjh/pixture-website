const menuBtn = document.querySelector(".hamburger-btn");
const sidebar = document.querySelector(".sidebar");
const sliderArr = document.querySelectorAll(".slider");
const pictureSlider = document.querySelector(".picture-slider");
const pictureSlide = pictureSlider.querySelectorAll(".slide");
const pictureArrow = document.querySelector(".picture-arrow");
const articleArrow = document.querySelector(".article-arrow");

let isOpen = false;
menuBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("is-open");
  isOpen
    ? (document.body.style.overflowY = "initial")
    : (document.body.style.overflowY = "hidden");
  isOpen = !isOpen;
});

sliderArr.forEach((slider) => {
  slider.scrollLeft = (pictureSlide[0].clientWidth + 34) * pictureSlide.length;
  slider.addEventListener("mousedown", sliderMouseDown);
  let startX = 0;
  let scrollLeft;
  function sliderMouseDown(e) {
    e.preventDefault();
    slider.classList.add("is-grabbing")
    slider.style.scrollBehavior = "initial";
    window.addEventListener("mousemove", sliderMouseMove);
    window.addEventListener("mouseup", sliderMouseUp);
    startX = e.clientX;
    scrollLeft = slider.scrollLeft;
  }
  function sliderMouseMove(e) {
    const dx = e.clientX - startX;
    slider.scrollLeft = scrollLeft - dx;
  }
  function sliderMouseUp(e) {
    slider.classList.remove("is-grabbing")

    window.removeEventListener("mousemove", sliderMouseMove);
  }
});
pictureArrow.addEventListener("click", (e) => {
  e.preventDefault();
  sliderArr[0].scrollLeft =
    sliderArr[0].scrollLeft - (pictureSlide[0].clientWidth + 34);
  sliderArr[0].style.scrollBehavior = "smooth";
});
articleArrow.addEventListener("click", (e) => {
  e.preventDefault();
  sliderArr[1].scrollLeft =
    sliderArr[1].scrollLeft - (pictureSlide[0].clientWidth + 34);
  sliderArr[1].style.scrollBehavior = "smooth";
});

const mailIcon = document.querySelector(".icon")
const noti = document.querySelector(".mail-noti")
const mail = document.querySelector(".mail-icon")

mailIcon.addEventListener("click",(e)=>{
  noti.classList.toggle("is-open")
})

mail.addEventListener("click",(e)=>{
  e.stopPropagation()
})

window.addEventListener("click",(e)=>{
  noti.classList.remove("is-open")

})
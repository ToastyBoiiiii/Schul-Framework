const video = document.querySelector("video.hero");
video.style.top = window.scrollY / 2 + "px";

addEventListener("scroll", () => {
  video.style.top = window.scrollY / 2 + "px";
});

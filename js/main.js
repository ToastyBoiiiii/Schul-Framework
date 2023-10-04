/* Background Video Effect */
const video = document.querySelector("video.hero");
video.style.top = window.scrollY / 2 + "px";

addEventListener("scroll", () => {
  video.style.top = window.scrollY / 2 + "px";
});

/* Tabs */
let currentTab = 0;
const tabButtons = document.querySelectorAll(".tab button");
const tabText = [{small: "Efficiency in Action", title: "Mixer: The Featherweight 3D Modeling Solution", text: "Mixer is a groundbreaking 3D modeling and rendering software that prides itself on being incredibly lightweight. Unlike many other software packages that demand heavy hardware configurations, Mixer runs smoothly on a wide range of devices.", subSections: [{small: "Optimized Performance", title: "Streamlined for Speed", text: "Mixer's lightweight architecture ensures optimized performance, allowing you to work on complex 3D projects without experiencing lags or slowdowns."}, {small: "Efficiency Redefined", title: "Resource Consumption", text: "With Mixer, you can kiss resource-hogging software goodbye. It consumes minimal system resources, preserving your computer's power for your creative endeavors."}]},
  {small: "Render at the Speed of Imagination", title: "Mixer: Turbocharge Your Rendering Process", text: "Mixer isn't just about modeling; it's also a rendering powerhouse. When it comes to turning your 3D designs into stunning visuals, Mixer excels with its exceptional speed and performance.", subSections: [{small: "Real-Time Preview", title: "See Your Vision Unfold Instantly", text: "Mixer offers a real-time rendering preview that allows you to see the changes you make to your models instantly."}, {small: "Batch Rendering Efficiency", title: "Effortless Rendering Management", text: "Mixer simplifies the rendering process with efficient batch rendering capabilities, whether you're rendering a single frame or an entire animation sequence"}]},
  {small: "Intuitive Design", title: "Mixer: Where Creativity Meets Simplicity", text: "One of Mixer's standout features is its user-friendly interface, designed to cater to both beginners and seasoned 3D artists. Creating breathtaking 3D models and renders has never been this easy.", subSections: [{small: "No Learning Curve", title: "Start Creating Instantly", text: "Mixer's intuitive interface means you can dive right into your 3D projects without the need for extensive tutorials."}, {small: "Effortless Navigation", title: "Smooth and Intuitive Workflow", text: "The software's logical layout and customizable workspace make it easy to organize your workspace to suit your unique workflow."}]}];

function updateTab() {
  let currentTabText = tabText[currentTab];
  document.querySelector(".tab > article > .row > div").innerHTML = "<small>" + currentTabText.small + "</small><h4>" + currentTabText.title + "</h4><p>" + currentTabText.text + "</p><div class='row'><div class='one-half column'><small>" + currentTabText.subSections[0].small + "</small><h4>" + currentTabText.subSections[0].title + "</h4><p>" + currentTabText.subSections[0].text + "</p></div><div class='one-half column'><small>" + currentTabText.subSections[1].small + "</small><h4>" + currentTabText.subSections[1].title + "</h4><p>" + currentTabText.subSections[1].text + "</p></div></div>";
}

for(let key in tabButtons) {
  tabButtons[key].onclick = function() {
    currentTab = parseInt(key);

    for(let j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
    }

    tabButtons[key].classList.add("active");

    updateTab();
  };
}

/* Reviews */
let currentReview = 0;
const reviews = [{review: "Mixer is a game-changer! I've been using it for my architectural visualization projects, and it's incredibly user-friendly. The real-time rendering is a game-changer.", author: "Sarah M.", date: "28.09.2023"}, {review: "Mixer is a creative powerhouse. As a character artist, I appreciate its intuitive sculpting tools and the ability to seamlessly integrate with other 3D software.", author: "Mark P.", date: "16.05.2023"}, {review: "Mixer has transformed the way I approach product design. The parametric modeling features are a dream, allowing me to iterate designs rapidly.", author: "Aqua M.", date: "02.10.2023"}];
const reviewButtons = document.querySelectorAll(".reviews input[type='radio']");
reviewButtons[0].checked = true;

function updateReview() {
  document.querySelector(".reviews q").innerText = reviews[currentReview].review;
  document.querySelector(".reviews q + small").innerText = reviews[currentReview].author + ", " + reviews[currentReview].date;
}

for(let key in reviewButtons) {
  reviewButtons[key].onclick = function() {
    currentReview = parseInt(key);
    updateReview();
  };
}

setInterval(function() {
  currentReview++;

  if(currentReview >= reviewButtons.length) {
    currentReview = 0;
  }

  reviewButtons[currentReview].checked = true;
  updateReview();
}, 15000);

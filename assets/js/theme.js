
        //====== Play video after clicking on image ======
        //===============================================



//Toggle class that adds a higher z-index to the video when played

const video = document.getElementById("js-video");

video.addEventListener("click", function() {
  this.classList.toggle("video-z-index");
});

//Show play button image if video ends or is paused.
//Start video after clicking on play button image and hide it.


        // ====== Overlay menu======
        //============================

function closeMenu() {
  document.getElementById("js-nav").style.height = "0%";
}

function openMenu() {
  document.getElementById("js-nav").style.height = "100%";
}

function toggleMenu() {
  if (document.getElementById("js-nav").style.height !== "100%") {
    openMenu();
    stopPageScrolling();
    hideButtonInOverlayMenu();
  } else {
    closeMenu();
    startPageScrolling();
    displayGoToTopButton();
  }
}

function stopPageScrolling() {
  document.body.style.overflow = "hidden";
}

function startPageScrolling() {
  document.body.style.overflow = "scroll";
}

function hideButtonInOverlayMenu() {
  document.getElementById("js-goToTopButton").style.display = "none";
}


// === Close menu when an list item is clicked on

let liElements = document.getElementById("js-nav").getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", closeMenuOnSelect);
}

function closeMenuOnSelect() {
  if (document.body.offsetWidth <= 600) {
    closeMenu();}
}

        //====== Go to top button ======
        //==============================


//Display go to top button when scrolled 20 px

goToTopButton = document.getElementById("js-goToTopButton");
window.onscroll = function () {
  displayGoToTopButton();
};

function displayGoToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

//Goes to the first section with id - introduction

function goToTop() {
  let targetDiv = document.querySelector("#js-introduction");
  let targetPosition = calculateTargetPos(targetDiv);
  scrollToLocation(targetPosition);
}

function scrollToLocation(targetPosition) {
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Can be used if the header is fixed. Than offset = header height.
//When scrolled to position header dosn't cover the section.

function calculateTargetPos(target, offset = 0) {
  let targetDivTopPos = target.getBoundingClientRect().top;
  let windowOffset = window.pageYOffset;
  let position = targetDivTopPos + windowOffset - offset;

  return position;
}






const locoMotive = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locoMotive();

// // Updating the background video here for smaller screen

// function updateVideoSource() {
//   var videoElement = document.getElementById("mainVideo");

//   // Check the screen width using matchMedia
//   var isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

//   // Log screen width for debugging
//   console.log("Screen Width:", window.innerWidth);

//   // Update video source based on screen width
//   videoElement.src = isSmallScreen
//     ? "videos/pexels-cottonbro-8721926 (2160p).mp4"
//     : "videos/pexels-cottonbro-8721932 (2160p).mp4";

//   // Log updated video source for debugging
//   console.log("Updated Video Source:", videoElement.src);

//   // Reload the video to apply the changes
//   videoElement.load();
// }

// // Update the video source on page load and window resize
// window.addEventListener("load", updateVideoSource);
// window.addEventListener("resize", updateVideoSource);

// --------

window.onload = function () {
  var video = document.getElementById("mainVideo");

  // Function to check if screen size is mobile
  function isMobileScreen() {
    return window.innerWidth <= 768; // Adjust this value as needed
  }

  // Function to change video source based on screen size
  function changeVideoSource() {
    if (isMobileScreen()) {
      video.src = "videos/pexels-cottonbro-8721926 (2160p).mp4"; // Path to mobile video
    } else {
      video.src = "/videos/pexels-cottonbro-8721932 (2160p).mp4"; // Default video
    }
    video.play(); // Play the video
  }

  // Call the function initially
  changeVideoSource();

  // Update video source on window resize
  window.onresize = function () {
    changeVideoSource();
  };
};

const page1Animation = () => {
  gsap.from("img", {
    opacity: 0,
    duration: 1,
    y: -50,
    // ease: "elastic(1, 0.3)",
  });
  gsap.from("h2", { opacity: 0, duration: 1, x: -100 });
  gsap.from("ul", { opacity: 0, duration: 1, x: -90 });
};
page1Animation();

document.addEventListener("DOMContentLoaded", () => {
  const joinPage = document.getElementById("join-page");
  joinPage.addEventListener("click", () => {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#page2-aboutus p", {
  opacity: 0,
  duration: 1,
  y: 50,

  scrollTrigger: {
    trigger: "#page2-aboutus p",
    start: "top 100%",
    end: "bottom bottom",
  },
});

gsap.from("#page2-aboutus hr", {
  x: -100,
  duration: 1,
  opacity: 0,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#page2-aboutus hr",
    start: "top 100%",
    end: "bottom bottom",
  },
});

gsap.from("#work ul li", {
  opacity: 0,
  duration: 1,
  x: -50,

  scrollTrigger: {
    trigger: "#work ul li",
    start: "top 120%",
    end: "bottom bottom",
  },
});

var tl = new TimelineMax({
  paused: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const glowButton = document.getElementById("btn-page2");

  gsap.to(glowButton, {
    boxShadow: "0 0 10px 5px #dc143c",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
});

gsap.to("#page3-title h1", {
  x: "-700%",
  duration: 25,
  repeat: -1,
  ease: "linear",
});

document.addEventListener("DOMContentLoaded", () => {
  const btnPage2 = document.getElementById("btn-page2");
  btnPage2.addEventListener("click", () => {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("event-page").addEventListener("click", function () {
  document.getElementById("page4").scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("board-memebers")
  .addEventListener("click", function () {
    document.getElementById("page5").scrollIntoView({ behavior: "smooth" });
  });

gsap.from("#page3-box", {
  opacity: 0,
  duration: 1,
  x: -50,

  scrollTrigger: {
    trigger: "#page3-box",
    start: "top 150%",
  },
});

gsap.from("#registration", {
  opacity: 0,
  duration: 1,
  y: 50,

  scrollTrigger: {
    trigger: "#page4",
    start: "top 150%",
  },
});

gsap.from("#event-text", {
  opacity: 0,
  duration: 1,
  x: -50,

  scrollTrigger: {
    trigger: "#page4",
    start: "top 170%",
  },
});

const dynamicText = document.querySelector("h1 span");
const words = ["Events", "Hacathons", "Tech Fest", "& More"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");
  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();

const dynamicTitleText = document.querySelector("#lower-div h1 span");
const titles = ["join!", "fasten!", "team up!", "engage!"];
let titleIndex = 0;
let titleCharIndex = 0;
let isTitleDeleting = false;

const typeTitleEffect = () => {
  const currentTitle = titles[titleIndex];
  const currentTitleChar = currentTitle.substring(0, titleCharIndex);
  dynamicTitleText.textContent = currentTitleChar;

  if (!isTitleDeleting && titleCharIndex < currentTitle.length) {
    titleCharIndex++;
    setTimeout(typeTitleEffect, 100); // Adjusted timeout to 100ms for faster typing
  } else if (isTitleDeleting && titleCharIndex > 0) {
    titleCharIndex--;
    setTimeout(typeTitleEffect, 50); // Adjusted timeout to 50ms for faster deletion
  } else {
    isTitleDeleting = !isTitleDeleting;
    titleIndex = !isTitleDeleting
      ? (titleIndex + 1) % titles.length
      : titleIndex;
    setTimeout(typeTitleEffect, 600); // Adjusted timeout to 600ms for faster switch between words
  }
};

typeTitleEffect();

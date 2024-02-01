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
    document.getElementById("page6").scrollIntoView({ behavior: "smooth" });
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

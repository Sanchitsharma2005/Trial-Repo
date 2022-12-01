
// typed js
const typed = new Typed(".typing", {
	strings: ["Trader.","Learner.", "Web Developer."],
	loop: true,
	typeSpeed: 80,
	backSpeed: 40,
  });
  
const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.Home,.about,.team',{delay:200, origin:'bottom'})


  
  
  const hamburger = document.querySelector("#mobile-menu");
  const tabs = document.querySelector(".navbar__menu");
  //display hamburger menue
  const mobileMenu = () => {
	hamburger.classList.toggle("is-active");
	tabs.classList.toggle("active");
  };
  
  
  //highlight active menu
  const navLogo = document.querySelector("#navbar__logo");
  const highlightMenu = () => {
	const activeElement = document.querySelector(".highlight");
	const homeMenu = document.querySelector("#home-page");
	const aboutMenu = document.querySelector("#about-page");
	const resumeMenu = document.querySelector("#resume-page");
	const stackMenu = document.querySelector("#stack-page");
  
	let scrollPos = window.scrollY;
	if (window.innerWidth > 960 && scrollPos < 500) {
	  homeMenu.classList.add("highlight");
	  aboutMenu.classList.remove("highlight");
	  return;
	} else if (window.innerWidth > 960 && scrollPos < 900) {
	  aboutMenu.classList.add("highlight");
	  homeMenu.classList.remove("highlight");
	  resumeMenu.classList.remove("highlight");
	  return;
	} else if (window.innerWidth > 960 && scrollPos < 1500) {
	  resumeMenu.classList.add("highlight");
	  aboutMenu.classList.remove("highlight");
	  stackMenu.classList.remove("highlight");
	  return;
	} else if (window.innerWidth > 960 && scrollPos < 3000) {
	  stackMenu.classList.add("highlight");
	  resumeMenu.classList.remove("highlight");
  
	  return;
	}
  
	if (
	  (activeElement && window.innerWidth < 960 && scrollPos < 600) ||
	  activeElement
	) {
	  activeElement.classList.remove("highlight");
	}
  };
  
  window.addEventListener("scroll", highlightMenu);
  window.addEventListener("click", highlightMenu);
  
  //close mobile menu on item click
  const hideMobileMenu = () => {
	const menuBars = document.querySelector(".is-active");
	if (window.innerWidth <= 768 && menuBars) {
	  hamburger.classList.toggle("is-active");
	  tabs.classList.remove("active");
	}
  };
  
  tabs.addEventListener("click", hideMobileMenu);
  navLogo.addEventListener("click", hideMobileMenu);
  
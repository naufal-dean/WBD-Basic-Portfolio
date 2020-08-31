window.onload = function() {
  // Handler definition
  const pDataScrollHandler = function(event) {
    const pDataSection = document.querySelector("#personal-data");
    const pDataSectionL = document.querySelector("#personal-data div.content-left>div");
    const pDataSectionR = document.querySelector("#personal-data div.content-right>div");

    if (pDataSection.getBoundingClientRect().top <= 200) {
      pDataSectionL.classList.remove("hidden");
      pDataSectionR.classList.remove("hidden");
    } else if (window.scrollY <= 50) {
      pDataSectionL.classList.add("hidden");
      pDataSectionR.classList.add("hidden");
    }
  };

  const aboutScrollHandler = function(event) {
    const aboutSection = document.querySelector("#about");
    const aboutSectionL = document.querySelector("#profpic");
    const aboutSectionR = document.querySelector("#profdesc");

    if (aboutSection.getBoundingClientRect().top <= 200) {
      aboutSectionL.classList.remove("hidden");
      aboutSectionR.classList.remove("hidden");
    } else if (window.scrollY <= 50) {
      aboutSectionL.classList.add("hidden");
      aboutSectionR.classList.add("hidden");
    }
  };

  // Initial load call
  pDataScrollHandler();
  aboutScrollHandler();

  // Register listener
  window.addEventListener("scroll", pDataScrollHandler);
  window.addEventListener("scroll", aboutScrollHandler);
};

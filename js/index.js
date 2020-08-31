window.onload = function() {
  // Handler definition
  const personalDataScrollHandler = function(event) {
    const personalDataSection = document.querySelector("#personal-data");
    const personalDataSectionL = document.querySelector("#personal-data div.content-left>div");
    const personalDataSectionR = document.querySelector("#personal-data div.content-right>div");

    if (personalDataSection.getBoundingClientRect().top <= 200) {
      personalDataSectionL.classList.remove("hidden");
      personalDataSectionR.classList.remove("hidden");
    } else if (window.scrollY <= 50) {
      personalDataSectionL.classList.add("hidden");
      personalDataSectionR.classList.add("hidden");
    }
  };
  // Initial load call
  personalDataScrollHandler();

  // Register listener
  window.addEventListener("scroll", personalDataScrollHandler);
};

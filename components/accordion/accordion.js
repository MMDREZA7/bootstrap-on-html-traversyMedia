let accordionIsOpen = false;

function transformAccordion() {
  const content = document.querySelector(".accordion-content");
  const header = document.querySelector(".accordion-header");
  const button = document.querySelector(".accordion-button");

  if (accordionIsOpen) {
    // Close the accordion
    content.classList.remove("open");
    content.classList.add("closed");
    header.classList.remove("open");
    button.classList.remove("open");
  } else {
    // Open the accordion
    content.classList.remove("closed");
    content.classList.add("open");
    header.classList.add("open");
    button.classList.add("open");
  }

  // Toggle the state
  accordionIsOpen = !accordionIsOpen;
}

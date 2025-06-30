const header = document.querySelector("header");
const main = document.querySelector("main");

/* Header er hight and set hight with margen top in main tag--- Start */

// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  if (header && main) {
    // Get the height of the header
    const headerHeight = header.offsetHeight;

    let heightPlus = headerHeight + 20;

    // Set the margin-top of the main element to match header height
    main.style.paddingTop = `${heightPlus}px`;
  }
});

console.log(header);
console.log(main);

/* Header er hight and set hight with margen top in main tag--- End */
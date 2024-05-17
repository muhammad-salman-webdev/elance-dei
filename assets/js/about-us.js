"use strict";
const teamCards = document.querySelectorAll(
  ".about_team-container > .about_team-card"
);
teamCards.forEach((card) => {
  const readMoreBtn = card.querySelector(".read_more");
  readMoreBtn.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      const PopupContainer = document.createElement("div");
      PopupContainer.classList.add("team-member-popup");

      //   Getting the Data from the Team Card
      const image = card.querySelector("img").src,
        name = card.querySelector("h3").innerText,
        designation = card.querySelector("p").innerText,
        gender = card.querySelector("span").innerText,
        description = card.querySelector(".span_p").innerHTML;
      console.log(image, name, designation, gender, description);

      // Creating new Popup with card data
      PopupContainer.innerHTML = `
    <div class="team-member">

        <div class="head">

          <!-- Close Icon -->
          <div class="close-icon">
            <i class="fa-light fa-xmark"></i>
          </div>

          <!-- Image -->
          <div class="img">
            <img src="${image}" alt="#" />
          </div>

          <!-- Name + designation -->
          <div class="info">
            <h3>${name}</h3>
            <p>${designation}</p>
            <span>${gender}</span>
          </div>

        </div>

        <!-- Detailed Description -->

        <div class="description">
          <div class="span_p"> ${description} <div>
        </div>
      </div>
    `;

      document.body.appendChild(PopupContainer);

      // Closing the Popup
      const closeIcon = PopupContainer.querySelector(".close-icon");
      closeIcon.addEventListener("click", () => {
        document.body.removeChild(PopupContainer);
      });

      // Closing the Popup on Esc Key
      document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          document.body.removeChild(PopupContainer);
        }
      });

      // Closing the Popup on Click Outside
      document.addEventListener("click", (e) => {
        if (e.target == PopupContainer) {
          document.body.removeChild(PopupContainer);
        }
      });

      window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 800) {
          document.body.removeChild(PopupContainer);
        }
      });

      // Closing the Popup on Click Outside
    } else {
      card.classList.toggle("show-more");
      if (readMoreBtn.innerText == "Read more") {
        readMoreBtn.innerText = "Read less";
        window.addEventListener("resize", () => {
          const windowWidth = window.innerWidth;
          if (windowWidth > 800) {
            readMoreBtn.innerText = "Read more";
            card.classList.remove("show-more");
          }
        });
      } else {
        readMoreBtn.innerText = "Read more";
      }
    }
  });
});

"use-strict";

const timeFrameButtons = document.querySelectorAll(".time-frame-btn");

// Default active time frame
let activeTimeFrame = "weekly";

timeFrameButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`${btn.dataset.timeframe} button clicked`);

    // Remove active class from all buttons
    timeFrameButtons.forEach((button) => {
      button.classList.remove("active-btn");
    });

    // Add active class to clicked button
    btn.classList.add("active-btn");

    // Update active timeframes
    activeTimeFrame = btn.dataset.timeframe;

    // Clear existing cards
    document.getElementById("section-fitter").innerHTML = "";

    // Re-render cards based on selected timeframes
    renderCards();
  });
});

const renderCards = () => {
  fetch("./data.json").then((res) =>
    res.json().then((data) => {
      data.map((item) => {
        const timeFrame = item.timeframes[activeTimeFrame];

        // Create section element
        const sectionHtml = `
        <section  class="col-12 pt-4 pt-md-0 activity-card">
              <div
                class="activity-icon card d-flex align-items-end rounded-4 overflow-hidden" style="background-color: ${item.style.color}; "
              >
                <img style="margin: ${item.style.margin}" src=${item.images.icon} alt="Work Icon" />
              </div>
              <div class="card time-card p-4 rounded-4 pe-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <h2 class="title">${item.title}</h2>
                  <img
                    src="./images/icon-ellipsis.svg"
                    alt="Ellipsis Icon"
                    class="ellipsis-icon"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center flex-md-column align-items-md-start mt-md-3">
                  <h3 class="current-hours">${timeFrame.current}hrs</h3>
                  <p class="previous-hours mt-2 mt-md-0">Last Week - ${timeFrame.previous}hrs</p>
                </div>
              </div>
            </section>
      `;

        document
          .getElementById("section-fitter")
          .insertAdjacentHTML("beforeend", sectionHtml);
      });
    })
  );
};

renderCards();

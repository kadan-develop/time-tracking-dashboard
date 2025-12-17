"use-strict";

fetch("./data.json").then((res) =>
  res.json().then((data) => {
    data.map((item) => {
      console.log(item);
      const { daily, weekly, monthly } = item.timeframes;

      // Create section element

      const sectionHtml = `
        <section class="col-12 col-md-8">
              <div
                class="activity-icon card d-flex align-items-end rounded-4 overflow-hidden" style="background-color: ${item.style.color}; "
              >
                <img style="margin: ${item.style.margin}" src=${item.images.icon} alt="Work Icon" />
              </div>
              <div class="card time-card p-4 rounded-4">
                <div class="d-flex justify-content-between align-items-center">
                  <h2 class="title">${item.title}</h2>
                  <img
                    src="./images/icon-ellipsis.svg"
                    alt="Ellipsis Icon"
                    class="ellipsis-icon"
                  />
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="current-hours">${daily.current}hrs</h3>
                  <p class="previous-hours mt-2">Last Week - ${daily.previous}hrs</p>
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

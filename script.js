"use-strict";

fetch("./data.json").then((res) =>
  res.json().then((data) => {
    data.map((item) => {
      // console.log(item);
      // const { daily, weekly, monthly } = item.timeframes;
    });
  })
);

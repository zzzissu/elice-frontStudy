const slider = document.getElementById("slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const width = 1024;
const elementCnt = slider.getElementsByTagName("img").length;
let cur = 1;

const left = () => {
  cur = (((cur - 1) % (elementCnt - 1)) + (elementCnt - 1)) % (elementCnt - 1);
  const from = (-cur - 1) * width;
  const to = -cur * width;
  return [from, to];
};

const right = () => {
  const from = -cur * width;
  const to = (-cur - 1) * width;
  cur = (cur + 1) % (elementCnt - 1);
  return [from, to];
};

leftBtn.addEventListener("click", () => {
  const [from, to] = left();

  slider.animate(
    [
      { transform: `translateX(${from}px)` },
      { transform: `translateX(${to}px)` },
    ],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
});

rightBtn.addEventListener("click", () => {
  const [from, to] = right();

  slider.animate(
    [
      { transform: `translateX(${from}px)` },
      { transform: `translateX(${to}px)` },
    ],
    {
      duration: 200,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
});

/*document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

const navItems = document.querySelectorAll("#site-title, li, a");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    enlargeCircle();
  });

  item.addEventListener("mouseout", () => {
    resetCircleSize();
  });
});

function enlargeCircle(element) {
  const circle = document.getElementById("circlecursor");
  circle.style.transform = "translate(-50%, -50%) scale(1.7)";
}

function resetCircleSize(element) {
  const circle = document.getElementById("circlecursor");
  circle.style.transform = "translate(-50%, -50%) scale(1.0)";
}
*/
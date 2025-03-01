window.addEventListener("scroll", () => {
  const bringing = document.querySelectorAll(
    ".business-solution .slide-left-anim"
  );
  bringing &&
    bringing.length &&
    bringing.forEach((item) => {
      item.classList.add("slide-right-animation");
    });

  const rightStarContentHeaderList = document.querySelectorAll(
    ".right-star-content .right-star-content-header"
  );
  rightStarContentHeaderList.forEach((header) =>
    header.classList.add("slide-up-animaion")
  );

  const rightStarContentParaList = document.querySelectorAll(
    ".right-star-content .right-star-content-para"
  );
  rightStarContentParaList.forEach((para) =>
    para.classList.add("slide-up-animaion")
  );

  const rightStarContentLast = document.querySelector(
    ".right-star-content .svg-star-content-last"
  );
  rightStarContentLast.classList.add("slide-up-animaion");
});

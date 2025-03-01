const menu = document.querySelector(".menu");
const rightDrawer = document.querySelector("#right-drawer");
menu.addEventListener("click", () => {
  const isCloseExist = rightDrawer.classList.contains("close");
  isCloseExist && rightDrawer.classList?.remove("close");
  rightDrawer.classList.add("open");
});

function onCloseMenu() {
  const isOpenExist = rightDrawer.classList.contains("open");
  isOpenExist && rightDrawer.classList.remove("open");
  rightDrawer.classList.add("close");
}

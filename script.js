const user = document.querySelector(".user")
let aLichilnyk = getComputedStyle(user).right
let dLichilnyk = getComputedStyle(user).left
let sLichilnyk = getComputedStyle(user).bottom
let wLichilnyk = getComputedStyle(user).top
document.addEventListener("keydown", (aEvent) => {
    console.log(aEvent)
if(aEvent.code === "KeyA"){
    aLichilnyk -= 10
}
})
document.addEventListener("keydown", (dEvent) => {
  console.log(dEvent);
  if (dEvent.code === "KeyD") {
    dLichilnyk -= 10;
  }
});
document.addEventListener("keydown", (sEvent) => {
  console.log(sEvent);
  if (sEvent.code === "KeyS") {
    sLichilnyk -= 10;
  }
});
document.addEventListener("keydown", (wEvent) => {
  console.log(wEvent);
  if (wEvent.code === "KeyW") {
    wLichilnyk -= 10;
  }
});

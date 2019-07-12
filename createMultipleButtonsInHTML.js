/**
 * create multiple buttons 1-20 with click event in vanilla javascript only
 * clicking a button will send an alert with that button's number
 */

let btn = "";
for (let i = 1; i <= 20; i++) {
  btn = document.createElement("button");
  btn.innerHTML = "button " + i;
  btn.setAttribute("id", i);
  btn.addEventListener("click", e => {
    alert(e.target.id);
  });
  document.getElementsByTagName("body")[0].append(btn);
}

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ip = document.querySelector("input");

btn.addEventListener("click", function () {
    console.log("Button Clicked");
    let li = document.createElement("li");
    li.textContent = ip.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function () {
        ul.removeChild(li);
    });
    li.appendChild(delBtn);
    ul.appendChild(li);
    ip.value = "";
});
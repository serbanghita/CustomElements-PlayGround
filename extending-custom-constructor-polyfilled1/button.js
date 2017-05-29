class InflatingButton extends HTMLButtonElement {

  constructor() {
    super();
    console.log("constructor");
  }

  connectedCallback() {
    console.log("connectedCallback");
    this.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click!");
    });
  }

}

customElements.define("inflating-button", InflatingButton, { extends: "button" });

window.addEventListener("load", () => {
  console.log("load");
  let $createBtn = document.getElementById("create1");

  $createBtn.addEventListener("click", (e) => {
    console.log("create!");
    e.preventDefault();
    let $btn = document.createElement("button", { is: "inflating-button" });
    $btn.innerText = "Press me!";
    document.getElementById("content").appendChild($btn);
  });

  $createBtn = document.getElementById("create2");

  $createBtn.addEventListener("click", (e) => {
    console.log("create!");
    e.preventDefault();
    let $btn = document.createElement("inflating-button");
    $btn.innerText = "Press me!";
    document.getElementById("content").appendChild($btn);
  });

  $createBtn = document.getElementById("create3");

  $createBtn.addEventListener("click", (e) => {
    console.log("create!");
    e.preventDefault();
    let $btn = new InflatingButton();
    $btn.innerText = "Press me!";
    document.getElementById("content").appendChild($btn);
  });

});

class InflatingButton extends HTMLElement { // HTMLButtonElement

  constructor() {
    super();
    console.log("constructor");
    this.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click!");
    });
  }

}

window.addEventListener("WebComponentsReady", () => {
  customElements.define("inflating-button", InflatingButton, { extends: "button" });

  // <inflating-button>Press me</inflating-button>
  let $btn = document.createElement("inflating-button");
  $btn.innerText = "Press me!";
  document.body.appendChild($btn);
});

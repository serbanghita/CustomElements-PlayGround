class InflatingButton extends HTMLButtonElement {

  constructor() {
    super();
    console.log("constructor");

    this.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clicked");
      });
  }

}

customElements.define("inflating-button", InflatingButton, { extends: "button" });

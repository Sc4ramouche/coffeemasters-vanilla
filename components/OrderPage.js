export class OrderPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const template = document.getElementById("order-form-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}
customElements.define("order-page", OrderPage);

export class DetailsPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const template = document.getElementById("details-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}
customElements.define("details-page", DetailsPage);

import {customElement, LitElement, html} from "lit-element";

@customElement('wc-navbar')
class Navbar extends LitElement {

  protected render(): unknown {
    return html`
      <div>Navbar</div>
    `;
  }
}
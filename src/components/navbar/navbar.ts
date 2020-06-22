import {customElement, LitElement, html, css, unsafeCSS} from "lit-element";
import styles from './navbar.component.pcss';

@customElement('wc-navbar')
class Navbar extends LitElement {

  static get styles() {
    console.log(styles)
    return [css`${unsafeCSS(styles)}`]
  }

  protected render(): unknown {
    return html`
      <nav class="navbar">
        <slot></slot>
      </nav>
    `;
  }
}
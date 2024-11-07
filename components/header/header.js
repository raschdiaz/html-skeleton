class Header extends HTMLElement {
    async connectedCallback() {
      const resp = await fetch("components/header/header.html");
      const html = await resp.text();
      this.innerHTML = html;
    }
}

customElements.define('template-header', Header);
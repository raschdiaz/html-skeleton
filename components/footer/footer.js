
class Footer extends HTMLElement {
    async connectedCallback() {
      const resp = await fetch("components/footer/footer.html");
      const html = await resp.text();
      this.innerHTML = html;
    }
}

customElements.define('template-footer', Footer);

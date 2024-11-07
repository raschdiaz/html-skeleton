class Body extends HTMLElement {
    async connectedCallback() {
        const resp = await fetch("components/body/body.html");
        const html = await resp.text();
        this.innerHTML = html;
    }

}

function test() {
    console.log("test!");
}

customElements.define('template-body', Body);
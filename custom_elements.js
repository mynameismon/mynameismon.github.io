/**
 * Custom elements defined to override Terminal CSS files.
 */

class headings_text extends HTMLElement{
    constructor() {
        super();
    }
}

customElements.define('headings-text', headings_text);

class greetings_text extends HTMLElement {
    constructor () {
        super();
    }
}

customElements.define('greetings-text', greetings_text);
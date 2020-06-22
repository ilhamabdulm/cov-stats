class LastUpdate extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set date(date) {
    this._date = date;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      :host {
        font-size: 0.75rem;
        color: var(--white-color);
      }
    </style>
    ${this._date}
    `;
  }
}

customElements.define('last-update', LastUpdate);

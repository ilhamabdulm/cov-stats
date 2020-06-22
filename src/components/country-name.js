class CountryName extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set setCountry(name) {
    this._country = name;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          padding: 2rem 0;
          display: flex;
          justify-content: flex-end;
        }
        
        .country-name {
          background-color: var(--white-color);
          height: 5rem;
          min-width: 22.5rem;
          text-transform: uppercase;
          letter-spacing: 0.25rem;
          display: flex;
          justify-content: flex-start;
          padding: 0 2rem;
          color: var(--black-color);
          font-size: 1.75rem;
          font-weight: 600;
          align-items: center;
          border-radius: 1.25rem 0 0 1.25rem;
        }

        @media (max-width: 72rem) {
          :host {
            padding: 1.25rem 0;
          }

          .country-name {
            height: 4rem;
            min-width: 16.5rem;
            font-size: 1.35rem;
          }
        }

        @media (max-width: 72rem) {
          :host {
            padding: 1.25rem 0;
          }

          .country-name {
            height: 3.25rem;
            min-width: 10.5rem;
            font-size: 1rem;
          }
        }
      </style>
      <div class="country-name">
        ${this._country}
      </div>
    `;
  }
}

customElements.define('country-name', CountryName);

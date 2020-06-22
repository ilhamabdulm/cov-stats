import virusIcon from '../assets/ic_virus.svg';

export class PageHeader extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        img {
          height: 4rem;
          width: 4rem;
          margin-right: 1.25rem;
        }
        
        h1 {
          font-size: 2.75rem;
          letter-spacing: 0.25rem;
        }

        @media (max-width: 72rem) {
          :host {
            margin-bottom: 1.25rem !important;
            margin: 0;
            padding: 0;
          }

          h1 {
            font-size: 2.25rem;
          }
  
          img {
            width: 3rem;
            height: 3rem;
          }
        }

        @media (max-width: 48rem) {
          :host {
            margin-bottom: 1.25rem !important;
            margin: 0;
            padding: 0;
            justify-content: flex-start;
          }

          h1 {
            font-size: 1.25rem;
          }
  
          img {
            width: 3rem;
            height: 3rem;
          }
        }
      </style>
      <img alt="virus" src="${virusIcon}" />
      <h1>COVID STATS</h1>
    `;
  }
}

customElements.define('page-header', PageHeader);

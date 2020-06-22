import searchIcon from '../assets/ic_search.svg';

export default class SearchBar extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  get searchValue() {
    return this.shadowDOM.querySelector('#searchInput').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
       :host {
        position: relative;
        display: block;
        width: 20rem;
        height: 2rem;
        margin-top: 2rem;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      }
      
       form > img {
        width: 1.25rem;
        height: 1.25rem;
        top: 0.4rem;
        left: 0.4rem;
        position: absolute;
      }
      
       form > input {
        border: 0.015rem solid #191a1a;
        border-radius: 0.25rem;
        width: 20rem;
        height: 2rem;
        padding: 0 0.5rem 0 2rem;
        font-size: 1rem;
      }
      </style>
      <form id="searchForm">
        <img alt="icon-search" src="${searchIcon}" />
        <input id="searchInput" placeholder="Cari berdasarkan nama negara" type="text" />
      </form>
    `;

    this.shadowDOM
      .querySelector('#searchForm')
      .addEventListener('submit', this._submitEvent);
  }
}

customElements.define('search-bar', SearchBar);

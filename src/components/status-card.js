import positiveIcon from '../assets/ic_positive.svg';
import deathIcon from '../assets/ic_death.svg';
import recoverIcon from '../assets/ic_recover.svg';

export class StatusCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    const textColor =
      this._data.status === 'Aktif'
        ? 'var(--black-color)'
        : 'var(--white-color)';
    this._color = textColor;
    this._icon =
      this._data.status === 'Aktif'
        ? positiveIcon
        : this._data.status === 'Meninggal'
        ? deathIcon
        : recoverIcon;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      :host {
        background-color: ${this._data.color};
        height: 4.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      }

      div {
        display: flex;
        align-items: center;
      }
      
      p {
        color: ${this._color};
        font-size: 1.5rem;
        font-weight: 600;
      }

      img {
        width: 4rem;
        height: 4rem;
      }

      @media (max-width: 72rem) {
        :host {
          height: 3.5rem;
        }

        p {
          font-size: 1.25rem;
        }

        img {
          width: 3rem;
          height: 3rem;
        }
      }
    </style>
    <div>
      <img alt="icon" src="${this._icon}" />
      <p>${this._data.status}</p>
    </div>
    <p>${this._data.data}</p>
    `;
  }
}

customElements.define('status-card', StatusCard);

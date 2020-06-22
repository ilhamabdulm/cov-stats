class StatusGroup extends HTMLElement {
  constructor() {
    super();
    this.colors = [
      'var(--green-color)',
      'var(--yellow-color)',
      'var(--red-color)',
    ];
    this.status = ['Sembuh', 'Aktif', 'Meninggal'];
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          height: 28rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      </style>
    `;
    this._data.forEach((el, idx) => {
      const statusCard = document.createElement('status-card');
      statusCard.data = {
        color: this.colors[idx],
        status: this.status[idx],
        data: el,
      };
      this.shadowDOM.appendChild(statusCard);
    });
  }
}

customElements.define('status-group', StatusGroup);

class DataTable extends HTMLElement {
  constructor() {
    super();

    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set tableData(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          background-color: #fafafa;
          border: 0.1rem solid var(--light-text-color);
          padding: 1.25rem;
          max-height: 28.5rem;
          border-radius: 0.5rem;
          overflow-y: auto;
          scrollbar-width: auto; /* "auto" or "thin"  */
          scrollbar-color: var(--blue-color) var(--light-text-color);
        }
        
        table {
          width: 100%;
        }
        
        table > thead {
          background-color: var(--red-color);
          position: sticky;
          top: -1.25rem;
        }
        
        table > thead > tr > th {
          width: 15%;
          padding: 1rem 0;
          color: var(--white-color);
        }
        
        table > thead > tr > th:nth-child(1) {
          width: 40%;
        }
        
        table > tbody > tr {
          box-shadow: inset 0px -0.1rem 0px var(--light-text-color);
        }
        
        table > tbody > tr > td {
          text-align: center;
          padding: 0.75rem 0;
        }
        
        :host::-webkit-scrollbar {
          width: 0.65rem; /* width of the entire scrollbar */
        }
        :host::-webkit-scrollbar-track {
          background: var(--light-text-color); /* color of the tracking area */
        }
        :host::-webkit-scrollbar-thumb {
          background-color: var(--blue-color); /* color of the scroll thumb */
          border-radius: 1rem; /* roundness of the scroll thumb */
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>Negara</th>
            <th>Aktif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    this._data.forEach((el) => {
      const tableRef = this.shadowDOM.querySelector('tbody');
      const newRow = tableRef.insertRow(-1);
      newRow.insertCell(0).appendChild(document.createTextNode(el.combinedKey));
      newRow.insertCell(1).appendChild(document.createTextNode(el.active));
      newRow.insertCell(2).appendChild(document.createTextNode(el.recovered));
      newRow.insertCell(3).appendChild(document.createTextNode(el.deaths));
    });
  }
}

customElements.define('data-table', DataTable);

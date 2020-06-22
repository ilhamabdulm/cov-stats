import dataFetch from '../utils/fetch';
import moment from 'moment';

export default function main() {
  const countryName = document.querySelector('country-name');
  const statusGroup = document.querySelector('status-group');
  const lastUpdate = document.querySelector('last-update');
  const searchInput = document.querySelector('search-bar');
  const dataTable = document.querySelector('data-table');

  const setInformation = (region) => {
    if (region) {
      return dataFetch(region)
        .then((res) => {
          countryName.setCountry = res.countryRegion;
          statusGroup.data = [res.recovered, res.active, res.deaths];
          lastUpdate.date = moment(res.lastUpdate).format(
            'DD/MM/YYYY hh:mm:ss'
          );
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } else {
      return dataFetch()
        .then((res) => {
          dataTable.tableData = res;
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  setInformation('Indonesia');
  setInformation();

  searchInput.submitEvent = (e) => {
    e.preventDefault();
    setInformation(searchInput.searchValue);
  };
}

import axios from 'axios';

const fetchInformation = (region) => {
  return new Promise((res, rej) => {
    axios
      .get('https://covid19.mathdro.id/api/confirmed')
      .then((response) => {
        const { data } = response;
        const country =
          region &&
          data.find(
            (el) => el.countryRegion.toLowerCase() === region.toLowerCase()
          );
        res(region ? country : data);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export default fetchInformation;

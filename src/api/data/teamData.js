import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/team.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/team.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/team/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTeam().then(resolve);
        });
    })
    .catch(reject);
});

export { getTeam, createPlayer };

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/team.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTeam;

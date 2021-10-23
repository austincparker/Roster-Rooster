import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTeam = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/team.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPlayer = (obj, userId) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/team.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/team/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTeam(userId).then(resolve);
        });
    })
    .catch(reject);
});

const deletePlayer = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/team/${firebaseKey}.json`)
    .then(() => getTeam(uid).then(resolve))
    .catch(reject);
});

const updatePlayer = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/team/${firebaseKey}.json`, updateObj)
    .then(() => getTeam().then(resolve))
    .catch(reject);
  console.warn(updateObj);
});

export {
  getTeam, createPlayer, deletePlayer, updatePlayer,
};

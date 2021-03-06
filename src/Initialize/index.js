import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getTeam } from '../api/data/teamData';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [players, setPlayers] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        getTeam(userInfoObj.uid).then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <img
            alt="roster-rooster"
            src="https://github.com/austincparker/acp-portfolio/blob/main/public/imgs/project-logos/Roster%20Rooster.png?raw=true"
            width="200px"
            className="rr-logo"
          />
          <Navigation />
          <Routes
            players={players}
            setPlayers={setPlayers}
            setEditItem={setEditItem}
            obj={editItem}
            uid={user.uid}
          />
        </>
      ) : (
        <>
          <img
            alt="roster-rooster"
            src="https://github.com/austincparker/acp-portfolio/blob/main/public/imgs/project-logos/Roster%20Rooster.png?raw=true"
            width="200px"
            className="rr-logo"
          />
          <SignIn user={user} />
        </>
      )}
    </div>
  );
}

export default Initialize;

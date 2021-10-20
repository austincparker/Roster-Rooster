import React, { useEffect, useState } from 'react';
import getTeam from '../api/data/teamData';
import Navigation from '../components/Navigation';
import Team from '../components/Team';

function Initialize() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeam().then(setPlayers);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Team players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default Initialize;

import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';

export default function Home({ players, setPlayers }) {
  return (
    <div className=" container text-center">
      <h1>Team</h1>
      <div>
        {players.map((player) => (
          <Team
            key={player.firebaseKey}
            player={player}
            setPlayers={setPlayers}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};

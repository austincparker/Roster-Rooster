import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';

export default function Home({ players, setPlayers }) {
  return (
    <div>
      {players.map((player) => (
        <Team
          key={player.firebaseKey}
          player={player}
          setPlayers={setPlayers}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};

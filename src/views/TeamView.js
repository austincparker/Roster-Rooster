import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';

export default function TeamView({ players, setPlayers }) {
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

TeamView.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};

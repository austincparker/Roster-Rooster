import React from 'react';
import PropTypes from 'prop-types';

export default function Team({ player }) {
  return (
    <div className="container d-flex justify-content-center">
      <p>{player.name}</p>
    </div>
  );
}

Team.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  //   setPlayers: PropTypes.func.isRequired,
};

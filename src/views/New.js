import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

// eslint-disable-next-line react/prop-types
export default function New({ setPlayers }) {
  const [formInput, setFormInput] = useState(initialState);

  return (
    <div className="text-center">
      <h1>Add a Player</h1>
      <PlayerForm
        setFormInput={setFormInput}
        setPlayers={setPlayers}
        formInput={formInput}
      />
    </div>
  );
}

New.propTypes = {
  setPlayers: PropTypes.func.isRequired,
};

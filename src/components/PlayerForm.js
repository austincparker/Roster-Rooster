import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

export default function PlayerForm() {
  const [formInput, setFormInput] = useState(initialState);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn('add a player');
    // setPlayers(players);
    resetForm();
  };

  return (
    <div className="text-center">
      <h1>Add a Player</h1>
      <form id="playerForm" className="mb-3 d-flex align-items-center">
        <label htmlFor="name" className="me-1">
          <input
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="ADD A PLAYER"
          />
        </label>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// PlayerForm.propTypes = {
//   setPlayers: PropTypes.func.isRequired,
// };

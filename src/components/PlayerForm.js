import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createPlayer } from '../api/data/teamData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

const Container = styled.div``;

const FormStyle = styled.div`
  padding: 30px 0 50px 0;
  input {
    margin-bottom: 10px;
  }
`;

export default function PlayerForm({ setPlayers }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

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
    createPlayer({ ...formInput }).then((players) => {
      setPlayers(players);
    });
    resetForm();
    history.push('/team');
  };

  return (
    <Container>
      <FormStyle id="playerForm">
        <div>
          <label htmlFor="name">
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
        </div>
        <div>
          <label htmlFor="imageUrl">
            <input
              name="imageUrl"
              id="imageUrl"
              value={formInput.imageUrl}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="ADD AN IMAGE URL"
            />
          </label>
        </div>
        <div>
          <label htmlFor="position">
            <input
              name="position"
              id="position"
              value={formInput.position}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="ADD A POSITION"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </FormStyle>
    </Container>
  );
}

PlayerForm.propTypes = {
  setPlayers: PropTypes.func.isRequired,
};

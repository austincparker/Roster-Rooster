import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPlayer, updatePlayer } from '../api/data/teamData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
  uid: '',
};

const Container = styled.div``;

const FormStyle = styled.div`
  padding: 30px 0 50px 0;
  input {
    margin-bottom: 10px;
  }
`;

export default function PlayerForm({
  obj, setPlayers, setEditItem, uid,
}) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        imageUrl: obj.imageUrl,
        position: obj.position,
        firebaseKey: obj.firebaseKey,
        uid,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput.firebaseKey, formInput).then((players) => {
        setPlayers(players);
      });
    } else {
      createPlayer({ ...formInput, uid }, uid).then((players) => {
        setPlayers(players);
        console.warn(players);
      });
      resetForm();
    }
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
  obj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  uid: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

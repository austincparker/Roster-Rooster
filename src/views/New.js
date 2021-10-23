import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerForm from '../components/PlayerForm';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
  uid: '',
};

const Container = styled.div`
  background-color: white;
`;

// eslint-disable-next-line react/prop-types
export default function New({
  setPlayers, obj, setEditItem, uid,
}) {
  const [formInput, setFormInput] = useState(initialState);
  return (
    <Container className="text-center container">
      <h1>Add a Player</h1>
      <PlayerForm
        setFormInput={setFormInput}
        setPlayers={setPlayers}
        formInput={formInput}
        obj={obj}
        setEditItem={setEditItem}
        uid={uid}
      />
    </Container>
  );
}

New.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  uid: PropTypes.string.isRequired,
  setEditItem: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
};

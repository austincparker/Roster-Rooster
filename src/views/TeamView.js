import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Team from '../components/Team';

const Container = styled.div`
  background-color: white;
  h1 {
    margin-bottom: 30px;
  }
`;

export default function TeamView({
  players, setPlayers, setEditItem, uid,
}) {
  return (
    <Container className=" container text-center">
      <h1>Team</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {players.map((player) => (
          <Team
            key={player.firebaseKey}
            player={player}
            setPlayers={setPlayers}
            setEditItem={setEditItem}
            uid={uid}
          />
        ))}
      </div>
    </Container>
  );
}

TeamView.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEditItem: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

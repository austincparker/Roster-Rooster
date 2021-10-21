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

export default function TeamView({ players, setPlayers }) {
  return (
    <Container className=" container text-center">
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
    </Container>
  );
}

TeamView.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { deletePlayer } from '../api/data/teamData';

const PlayerCard = styled.div`
  margin-bottom: 20px;
  img {
    width: 300px;
    margin: auto;
  }
`;

const Container = styled.div``;

export default function Team({ player, setPlayers }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayers);
    }
  };
  return (
    <Container className="d-flex justify-content-center">
      <PlayerCard className="d-flex justify-content-center card">
        <img
          src={player.imageUrl}
          className="card-img-top prof-pic"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <Button color="danger" onClick={() => handleClick('delete')}>
            DELETE
          </Button>
        </div>
      </PlayerCard>
    </Container>
  );
}

Team.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerCard = styled.div`
  img {
    width: 300px;
    margin: auto;
  }
`;

const Container = styled.div``;

export default function Team({ player }) {
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
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </PlayerCard>
    </Container>
  );
}

Team.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  //   setPlayers: PropTypes.func.isRequired,
};

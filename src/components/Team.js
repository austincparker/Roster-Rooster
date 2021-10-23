import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deletePlayer } from '../api/data/teamData';

const PlayerCard = styled.div`
  background-color: teal;
  color: white;
  margin-bottom: 20px;
  img {
    width: 300px;
    margin: auto;
  }
`;

const Container = styled.div``;

export default function Team({
  player, setPlayers, setEditItem, uid,
}) {
  const history = useHistory();
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey, uid).then(setPlayers);
    } else if (method === 'edit') {
      setEditItem(player);
      history.push('/new');
    }
  };
  return (
    <Container>
      <PlayerCard className="mx-2">
        <img
          src={player.imageUrl}
          className="card-img-top prof-pic"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <Button color="info" onClick={() => handleClick('edit')}>
            EDIT
          </Button>
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
  setEditItem: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

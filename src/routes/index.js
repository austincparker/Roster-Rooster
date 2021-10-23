import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import New from '../views/New';
import TeamView from '../views/TeamView';

export default function Routes({
  players, setPlayers, setEditItem, obj, uid,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          exact
          path="/team"
          component={() => (
            <TeamView
              players={players}
              setPlayers={setPlayers}
              setEditItem={setEditItem}
            />
          )}
        />
        <Route
          exact
          path="/new"
          component={() => (
            <New
              setPlayers={setPlayers}
              setEditItem={setEditItem}
              obj={obj}
              uid={uid}
            />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  uid: PropTypes.string.isRequired,
};

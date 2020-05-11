import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {store} from '../store';
import {createPlayer, fetchGame} from '../actions';
import {v4 as uuid} from 'uuid';

export default () => {
  const history = useHistory();
  const params = useParams();
  const app = useSelector(state => state.app);
  const game = useSelector(state => state.game);

  useEffect(() => {
    let gameId;
    let playerId;

    if (game && game.id) {
      gameId = game.id;
    } else {
      gameId = params.gameId;
      store.dispatch(fetchGame({gameId}));
    }
    if (app.playerId) {
      playerId = app.playerId;
    } else {
      playerId = uuid();
      store.dispatch(createPlayer({playerId}));
    }

    console.log(`/${gameId}/${playerId}/`);
    history.push(`/${gameId}/${playerId}/`);
  });

  return <section>
    redirect...
  </section>;
};

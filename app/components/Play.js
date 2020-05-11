import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {store} from '../store';
import {createPlayer, fetchGame} from '../actions';

export default () => {
  const params = useParams();
  const {playerId, inProgress} = useSelector(state => state.app);
  const game = useSelector(state => state.game);

  useEffect(() => {
    if (!game || !game.id && !inProgress) {
      store.dispatch(fetchGame({gameId: params.gameId}))
    }
    if (!playerId && !inProgress) {
      store.dispatch(createPlayer({playerId: params.playerId}))
    }
  });

  return <section className="index">
    Игра
  </section>;
}

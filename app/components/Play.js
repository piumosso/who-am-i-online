import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {store} from '../store';
import {createPlayer, fetchGame} from '../actions';

export default () => {
  const params = useParams();
  const {playerId, inProgress, notFound} = useSelector(state => state.app);
  const game = useSelector(state => state.game);

  useEffect(() => {
    if (inProgress) {
      return;
    }

    if ((!game || !game.id) && !notFound) {
      store.dispatch(fetchGame({gameId: params.gameId}))
    }
    if (!playerId) {
      store.dispatch(createPlayer({playerId: params.playerId}))
    }
  });

  if (notFound) {
    return <div>Not found</div>
  }

  return <section className="index">
    Игра
  </section>;
}

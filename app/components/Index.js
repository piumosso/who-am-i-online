import React from 'react';
import {store} from '../store';
import {createGame} from '../actions';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ShareLink from './ShareLink';

export default () => {
  const inProgress = useSelector(state => state.app.inProgress);
  const game = useSelector(state => state.game);

  return <section className="index">
    {game ?
      <div>
        <ShareLink />
        <div>
          <NavLink to={`/${game.id}/`}>Начать игру</NavLink>
        </div>
      </div> :
      <button onClick={() => store.dispatch(createGame())} disabled={inProgress}>Создать игру</button>}
  </section>;
};

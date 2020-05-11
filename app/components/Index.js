import React from 'react';
import {store} from '../store';
import {createGame} from '../actions';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ShareLink from './ShareLink';
import Rules from './Rules';

export default () => {
  const inProgress = useSelector(state => state.app.inProgress);
  const game = useSelector(state => state.game);

  return <section>
    {game ?
      <div className="admin-invitation">
        <ShareLink/>
        <NavLink className="action-link" to={`/${game.id}/`}>Начать игру</NavLink>
      </div> :
      <div className="invitation">
        <div className="invitation__game-description">
          <Rules />
        </div>
        <button className="button" onClick={() => store.dispatch(createGame())} disabled={inProgress}>Создать игру
        </button>
      </div>}
  </section>;
};

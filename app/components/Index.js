import React from 'react';
import {store} from '../store';
import {createGame} from '../actions';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

export default () => {
  const inProgress = useSelector(state => state.app.inProgress);
  const game = useSelector(state => state.game);
  const gameLink = game && `${location.origin}/${game.id}/`;

  return <section className="index">
    {game ?
      <div>
        <div>
          Game link: {gameLink}
        </div>
        <div>
          Copy this link and send it to your friends
        </div>
        <div>
          <NavLink to={`/${game.id}/`}>Go to game!</NavLink>
        </div>
      </div> :
      <button onClick={() => store.dispatch(createGame())} disabled={inProgress}>Create game</button>}
  </section>;
};

import React from 'react';
import {useSelector} from 'react-redux';

export default () => {
  const game = useSelector(state => state.game);
  const gameLink = game && `${location.origin}/${game.id}/`;

  return <div>
    <div>
      Game link: {gameLink}
    </div>
    <div>
      Copy this link and send it to your friends
    </div>
    <br/>
  </div>
};

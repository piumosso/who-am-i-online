import React from 'react';
import {useSelector} from 'react-redux';

export default () => {
  const game = useSelector(state => state.game);
  const gameLink = game && `${location.origin}/${game.id}/`;

  return <div>
    <input type="text" value={gameLink} readOnly={true} />
    <div>
      Скопируй ссылку и пригласи друзей в игру
    </div>
    <br/>
  </div>
};

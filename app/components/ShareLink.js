import React, {useRef} from 'react';
import {useSelector} from 'react-redux';

export default () => {
  const game = useSelector(state => state.game);
  const gameLink = game && `${location.origin}/${game.id}/`;
  const ref = useRef(null);

  return <div className="share-link">
    <div className="share-link__label">
      Скопируй ссылку и пригласи друзей в игру
    </div>
    <input className="share-link__input" type="text" value={gameLink} readOnly={true} ref={ref}
           onClick={() => ref.current.select()}/>
  </div>;
};

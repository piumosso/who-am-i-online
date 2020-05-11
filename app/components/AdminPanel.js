import {store} from '../store';
import {finishPlayer, startGame} from '../actions';
import React from 'react';


export default ({game: {id, players}, inProgress, gameWasStarted}) => <section className="admin-panel">
  <div className="admin-panel__title">
    Администрирование игры
  </div>
  <div className="admin-people">
    <div className="admin-people__label">
      Ваша команда:
    </div>
    {players.map(({id: playerId, name, isFinished}, index) => <div className="admin-people__item" key={index}>
      <div className="admin-people__item-number">{index + 1}.</div>
      <div className="admin-people__item-name">{name}</div>
      {gameWasStarted && !isFinished &&
      <button className="admin-people__item-action button"
              onClick={() => store.dispatch(finishPlayer({gameId: id, playerId}))}
              disabled={inProgress}>Угадал себя</button>}
    </div>)}
  </div>
  {!gameWasStarted && <div className="admin-action">
    <button className="button" onClick={() => store.dispatch(startGame({gameId: id}))}
            disabled={inProgress || players.length < 2 || !players[0].name}>
      Поехали!
    </button>
    {players.length < 2 && <div className="admin-action__error">Нужны ещё люди</div>}
    {!players[0].name && <div className="admin-action__error">Нужно заполнить свои данные</div>}
  </div>}
</section>;

import {store} from '../store';
import {finishPlayer, startGame} from '../actions';
import React from 'react';


export default ({game: {id, players}, inProgress, gameWasStarted}) => <section>
  <div>
    Ваша команда:
    {players.map(({id: playerId, name, isFinished}, index) => <div key={index}>
      {index + 1}. {name}
      {gameWasStarted && !isFinished &&
      <button onClick={() => store.dispatch(finishPlayer({gameId: id, playerId}))} disabled={inProgress}>Угадал себя</button>}
    </div>)}
  </div>
  {!gameWasStarted && <div>
    <button onClick={() => store.dispatch(startGame({gameId: id}))} disabled={inProgress || players.length < 2}>
      Поехали!
    </button>
  </div>}
</section>;

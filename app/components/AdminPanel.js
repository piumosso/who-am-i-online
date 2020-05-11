import {store} from '../store';
import {finishPlayer, startGame} from '../actions';
import React from 'react';


export default ({game: {id, players}, inProgress, gameWasStarted}) => <section>
  <div>
    Players ({players.length}):
    {players.map(({id: playerId, name, isFinished}, index) => <div key={index}>
      {index + 1}. {name}
      {gameWasStarted && !isFinished &&
      <button onClick={() => store.dispatch(finishPlayer({gameId: id, playerId}))} disabled={inProgress}>Finished</button>}
    </div>)}
  </div>
  {!gameWasStarted && <div>
    <button onClick={() => store.dispatch(startGame({gameId: id}))} disabled={inProgress}>
      Start game
    </button>
  </div>}
</section>;

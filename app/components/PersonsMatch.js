import React from 'react';


export default ({game: {players, matchIndexes}, playerId}) => <section className="game-board">
  <div className="game-board__title">
    Кто все эти люди:
  </div>
  <div className="game-board__people">
    {players.map(({id, name, isFinished}, index) =>
      <div className="game-board__item" key={index}
           style={{textDecoration: isFinished ? 'line-through' : 'none'}}>
        <div className="game-board__item-number">
          {index + 1}.
        </div>
        <div className="game-board__item-name">
          {name} — {id !== playerId ? players[matchIndexes[index]].person : '?'}
        </div>
    </div>)}
  </div>
</section>;

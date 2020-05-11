import React from 'react';


export default ({game: {players, matchIndexes}, playerId}) => <section>
  <div>
    Who is who:
  </div>
  <div>
    {players.map(({id, name, isFinished}, index) =>
      <div key={index}
                                                         style={{textDecoration: isFinished ? 'line-through' : 'none'}}>
      {index + 1}. {name} — {id !== playerId ? players[matchIndexes[index]].person : '?'}
    </div>)}
  </div>
</section>;

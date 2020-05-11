import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {store} from '../store';
import {createPerson, createPlayer, fetchGame, finishPlayer, inProgress, startGame} from '../actions';

export default () => {
  const params = useParams();
  const {playerId, inProgress, notFound} = useSelector(state => state.app);
  const game = useSelector(state => state.game);

  useEffect(() => {
    if (inProgress) {
      return;
    }

    if ((!game || !game.id) && !notFound) {
      store.dispatch(fetchGame({gameId: params.gameId}));
    }
    if (!playerId) {
      store.dispatch(createPlayer({playerId: params.playerId}));
    }
  });

  if (notFound) {
    return <div>Not found</div>;
  }
  if (!game) {
    return <div>loading...</div>;
  }

  const currentPlayerInGame = game.players.find(({id}) => id === playerId);
  const isPlayerCompleted = currentPlayerInGame && currentPlayerInGame.name && currentPlayerInGame.person;
  const isAdmin = game.players.indexOf(currentPlayerInGame) === 0;
  const gameWasStarted = game.state === 'started';

  if (gameWasStarted && !isPlayerCompleted) {
    return <div>The game was started without you</div>;
  }

  return <section className="index">
    {gameWasStarted ? <PersonsMatch game={game} playerId={playerId}/> : isPlayerCompleted ? <StaticForm {...currentPlayerInGame} /> :
      <Form/>}
    {isAdmin && <AdminPanel game={game} inProgress={inProgress} gameWasStarted={gameWasStarted} />}
  </section>;
}


const Form = () => {
  const {inProgress, playerId} = useSelector(state => state.app);
  const gameId = useSelector(state => state.game).id;
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');

  return <div>
    <div>
      <div>Your name</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
    <div>
      <div>Person name</div>
      <input type="text" value={person} onChange={e => setPerson(e.target.value)}/>
    </div>
    <div>
      <button onClick={() => store.dispatch(createPerson({name, person, gameId, playerId}))}
              disabled={!name || !person || inProgress}>
        Send
      </button>
    </div>
  </div>;
};


const StaticForm = ({name, person}) => <div>
  <div>
    <div>Your name: {name}</div>
    <div>Person name: {person}</div>
  </div>
  Wait for others!
</div>;


const AdminPanel = ({game: {id, players}, inProgress, gameWasStarted}) => <section>
  <div>
    Players ({players.length}):
    {players.map(({id: playerId, name, isFinished}, index) => <div key={index}>
      {index + 1}. {name}
      {gameWasStarted && !isFinished && <button onClick={() => store.dispatch(finishPlayer({gameId: id, playerId}))}>Finished</button>}
    </div>)}
  </div>
  {!gameWasStarted && <div>
    <button onClick={() => store.dispatch(startGame({gameId: id}))} disabled={inProgress}>
      Start game
    </button>
  </div>}
</section>;


const PersonsMatch = ({game: {players, matchIndexes}, playerId}) => <section>
  <div>
    Who is who:
  </div>
  <div>
    {players.map(({id, name, isFinished}, index) => <div key={index} style={{textDecoration: isFinished ? 'line-through' : 'none'}}>
      {index + 1}. {name} — {id !== playerId ? players[matchIndexes[index]].person : '?'}
    </div>)}
  </div>
</section>;

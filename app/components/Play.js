import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {store} from '../store';
import {createPlayer, fetchGame} from '../actions';
import PersonsMatch from './PersonsMatch';
import AdminPanel from './AdminPanel';
import StaticForm from './StaticForm';
import Form from './Form';
import ShareLink from './ShareLink';


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
    {!gameWasStarted && <ShareLink />}
    {gameWasStarted ? <PersonsMatch game={game} playerId={playerId}/> : isPlayerCompleted ? <StaticForm {...currentPlayerInGame} /> :
      <Form/>}
      <br/>
      <br/>
    {isAdmin && <AdminPanel game={game} inProgress={inProgress} gameWasStarted={gameWasStarted} />}
  </section>;
}

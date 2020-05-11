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
    return <div className="state-message">Тут пусто, совсем ничего нет!</div>;
  }
  if (!game) {
    return <div className="state-message">Загрузка...</div>;
  }

  const currentPlayerInGame = game.players.find(({id}) => id === playerId);
  const isPlayerCompleted = currentPlayerInGame && currentPlayerInGame.name && currentPlayerInGame.person;
  const isAdmin = game.players.indexOf(currentPlayerInGame) === 0;
  const gameWasStarted = game.state === 'started';

  if (gameWasStarted && !isPlayerCompleted) {
    return <div className="state-message">Оу, кажется игру начали без тебя</div>;
  }

  return <section className="game">
    {gameWasStarted ?
      <PersonsMatch game={game} playerId={playerId}/> :
      isPlayerCompleted ?
        <StaticForm {...currentPlayerInGame} /> :
        <Form/>}
    {!gameWasStarted && <ShareLink />}
    {isAdmin && <AdminPanel game={game} inProgress={inProgress} gameWasStarted={gameWasStarted} />}
  </section>;
}

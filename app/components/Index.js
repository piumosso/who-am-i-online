import React from 'react';
import {store} from '../store';
import {createGame} from '../actions';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ShareLink from './ShareLink';

export default () => {
  const inProgress = useSelector(state => state.app.inProgress);
  const game = useSelector(state => state.game);

  return <section>
    {game ?
      <div className="admin-invitation">
        <ShareLink/>
        <NavLink className="action-link" to={`/${game.id}/`}>Начать игру</NavLink>
      </div> :
      <div className="invitation">
        <div className="invitation__game-description">
          <p>Правила игры</p>
          <p>Игроки загадывают имена реальных или вымышленных персонажей, лучше чтобы они были известными 🙂</p>
          <p>Далее все загаданные персонажи распределяются между игроками таким образом, что все видят кому достался какой персонаж, но при этом игрок не видит кем является он сам.</p>
          <p>Задача — угадать своего персонажа.</p>
          <p>Ход игры:</p>
          <p>— Все игроки по очереди задают остальным игрокам вопросы про своего персонажа.</p>
          <p>— Вопрос должен быть сформулирован так, что ответ на него предполагает ответ только «да» или «нет».</p>
          <p>— Игрок может задавать вопросы про персонажа до тех тех пор, пока не прозвучит «нет».</p>
          <p>— Затем ход переходит к следующему игроку.</p>
          <p>Игра заканчивается тогда, когда все персонажи отгаданы.</p>
        </div>
        <button className="button" onClick={() => store.dispatch(createGame())} disabled={inProgress}>Создать игру
        </button>
      </div>}
  </section>;
};

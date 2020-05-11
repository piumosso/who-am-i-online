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
          <p>
            Игроки придумывают имена персонажей, реальных, телепузиков и тд. Тут можно что-то ещё написать.
          </p>
          <p>
            В начале игры загаданные персонажи распределяются между всеми игроками так, что те видят персонажи всех, кроме своего. Задача — угадать своего персонажа.
          </p>
          <p>
            Игрок задаёт вопросы о своём персонаже, на которые возможны ответы <strong>да</strong> или <strong>нет,</strong> до тех пор, пока не прозвучит <strong>нет.</strong> Затем ход переходит к следующему игроку.
          </p>
        </div>
        <button className="button" onClick={() => store.dispatch(createGame())} disabled={inProgress}>Создать игру
        </button>
      </div>}
  </section>;
};

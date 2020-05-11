import React from 'react';
import {store} from '../store';
import {createGame} from '../actions';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import ShareLink from './ShareLink';

export default () => {
  const inProgress = useSelector(state => state.app.inProgress);
  const game = useSelector(state => state.game);

  return <section className="index">
    {game ?
      <div>
        <ShareLink/>
        <div>
          <NavLink to={`/${game.id}/`}>Начать игру</NavLink>
        </div>
      </div> : <div className="invitation">
        <div className="invitation__game-description">
          <p>
            Игроки одним из способов получают себе на лоб карточки, бумажки, наклейки или стикеры с именами популярных
            героев, реальных или выдуманных персонажей, даже просто с названиями предметов. Способы такие:
          </p>
          <p>
            можно попросить одного написать записки на лоб для всех, а ему придумает кто-то из команды;
            <p>
            </p>
            кто-то предпочитает положиться на коллективный разум, чтобы каждый писал на бумажке своего персонажа, а
            потом просто все по кругу передавали записки соседям;
            <p>
            </p>
            можно писать прямо у человека на лбу, то есть, сначала клеим стикер на лоб, потом пишем.
          </p>
          <p>
            Главное, не подглядывать, приклеить бумажку на лоб и начать игру.
          </p>
        </div>
        <button className="button" onClick={() => store.dispatch(createGame())} disabled={inProgress}>Создать игру
        </button>
      </div>}
  </section>;
};

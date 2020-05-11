import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {store} from '../store';
import {createPerson} from '../actions';


export default () => {
  const {inProgress, playerId} = useSelector(state => state.app);
  const gameId = useSelector(state => state.game).id;
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');

  return <div className="form">
    <div className="form__field">
      <div className="form__label">Как тебя зовут</div>
      <input className="input" type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
    <div className="form__field">
      <div className="form__label">Загадай имя персонажа</div>
      <input className="input" type="text" value={person} onChange={e => setPerson(e.target.value)}/>
    </div>
    <div className="form__field">
      <button className="button"
              onClick={() => store.dispatch(createPerson({name, person, gameId, playerId}))}
              disabled={!name || !person || inProgress}>
        Начать игру
      </button>
    </div>
  </div>;
};

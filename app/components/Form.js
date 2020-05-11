import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {store} from '../store';
import {createPerson} from '../actions';


export default () => {
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

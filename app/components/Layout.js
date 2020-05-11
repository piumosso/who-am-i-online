import React from 'react';
import {useSelector} from 'react-redux';

export default ({children}) => {
  const connected = useSelector(state => state.app.connected);
  const inProgress = useSelector(state => state.app.inProgress);

  return <section className="page">
    <header className="page__header">
      <small>Connected: {String(connected)} </small>
      <small>In progress: {String(inProgress)} </small>
      <br/>
      <br/>
      <br/>
    </header>

    <div className="page__content">
      {children}
    </div>
  </section>;
}


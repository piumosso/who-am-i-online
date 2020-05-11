import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

export default ({children}) => {
  const connected = useSelector(state => state.app.connected);
  const inProgress = useSelector(state => state.app.inProgress);

  return <section className="page">
    <header className="page__header">
      <NavLink to="/">Main page</NavLink><br/>
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


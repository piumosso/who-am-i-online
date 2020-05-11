import React from 'react';
import {useSelector} from 'react-redux';
// import {NavLink} from 'react-router-dom';

export default ({children}) => {
  const connected = useSelector(state => state.app.connected);

  return <section className="page">
    <header className="page__header">
      <small>Connected: {String(connected)}</small>
    </header>

    <div className="page__content">
      {children}
    </div>
  </section>;
}


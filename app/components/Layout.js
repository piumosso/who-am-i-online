import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

export default ({children}) => {
  const connected = useSelector(state => state.app.connected);
  const inProgress = useSelector(state => state.app.inProgress);

  return <section className="page">
    <header className="page__header">
      <div className={cn('page__progressBar', {inProgress})} />
      <NavLink className="page__logo" to="/">Who am I?</NavLink>
      <div className={cn('page__connection', {connected})} />
    </header>

    <div className="page__content">
      {children}
    </div>
  </section>;
}

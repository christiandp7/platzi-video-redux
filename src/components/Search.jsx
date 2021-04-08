import React from 'react';
import cx from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = cx('input', {
    isHome
  })
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  )
};

export default Search;
import React from 'react';
import MakerItem from '../maker_item/maker_item';
import styels from './maker.module.css';

const Maker = ({cards}) => {
  return (
    <section className={styels.maker}>
      <h1 className={styels.title}>Maker</h1>
      <ul className={styels.list}>
        {
        cards.map(card => {
          return <MakerItem key={card.id} card={card}/>
        })
      }
      </ul>
    </section>
  );
};

export default Maker;
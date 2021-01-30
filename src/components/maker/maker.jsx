import React from 'react';
import MakerItem from '../maker_form/maker_form';
import AddForm from '../add_form/add_form';
import styels from './maker.module.css';

const Maker = ({cards, addCard}) => {
  return (
    <section className={styels.maker}>
      <h1 className={styels.title}>Maker</h1>
      <ul className={styels.list}>
        {
        cards.map(card => {
          return <MakerItem key={card.id} card={card}/>
        })
      }
      <AddForm onSubmit={addCard}/>
      </ul>
    </section>
  );
};

export default Maker;
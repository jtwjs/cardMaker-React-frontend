import React from 'react';
import MakerItem from '../maker_form/maker_form';
import AddForm from '../add_form/add_form';
import styels from './maker.module.css';

const Maker = ({cards, addCard, deleteCard, updateCard}) => {
  return (
    <section className={styels.maker}>
      <h1 className={styels.title}>Maker</h1>
      <ul className={styels.list}>
        {
          Object.keys(cards).map(key => {
        
          return <MakerItem key={key}
           card={cards[key]} 
           deleteCard={deleteCard}
           updateCard={updateCard}
           />
        })
      }
      <AddForm addCard={addCard}/>
      </ul>
    </section>
  );
};

export default Maker;
import React from 'react';
import MakerForm from '../maker_form/maker_form';
import AddForm from '../add_form/add_form';
import styels from './maker.module.css';

const Maker = ({FileInput, cards, addCard, deleteCard, updateCard}) => {
  return (
    <section className={styels.maker}>
      <h1 className={styels.title}>Maker</h1>
      <ul className={styels.list}>
        {
          Object.keys(cards).map(key => {
        
          return <MakerForm key={key}
          FileInput={FileInput}
           card={cards[key]} 
           deleteCard={deleteCard}
           updateCard={updateCard}
           />
        })
      }
      <AddForm 
      FileInput={FileInput}
      addCard={addCard}
      />
      </ul>
    </section>
  );
};

export default Maker;
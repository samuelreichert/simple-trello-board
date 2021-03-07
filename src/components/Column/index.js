import { useEffect, useState } from 'react';

import AddContent from '../AddContent';
import Card from '../Card';

import './Column.css';

const Column = ({ title, cards = [], position, setColumns, updateCards }) => {
  const [columnCards, setColumnCards] = useState(cards);

  useEffect(() => {
    setColumnCards(cards);
  }, [cards]);

  const onSaveCard = (content) => {
    const newCards = [...columnCards];
    newCards.push(content);

    setColumnCards(newCards);
    updateCards(title, position, newCards);
  };

  const onEditCard = (oldContent, newContent) => {
    const newCards = columnCards.map((card) => {
      return card === oldContent ? newContent : card;
    });

    setColumnCards(newCards);
    updateCards(title, position, newCards);
  };

  return (
    <div className='column'>
      <h4 className='column__title'>{title}</h4>

      <div className='cards'>
        {columnCards.map((card, i) => (
          <Card key={i} title={card} onEditCard={onEditCard} column={title} setColumns={setColumns} />
        ))}
      </div>

      <AddContent
        contentType='card'
        dark
        hasContent={columnCards.length > 0}
        isTextArea
        onSaveContent={onSaveCard}
      />
    </div>
  );
};

export default Column;

import { useState } from 'react';

import ContentForm from '../ContentForm';
import DropDown from '../Dropdown';
import DeleteIcon from '../../svgs/delete-icon';
import RightIcon from '../../svgs/right-icon';
import { fetchStorage, updateStorage } from '../../storage';

import './Card.css';

const Card = ({ column, onEditCard, title, setColumns }) => {
  const data = fetchStorage();
  const options = data.map((option) => option.title);
  const [editCardOpen, setEditCardOpen] = useState(false);
  const [isMoveOpen, setIsMoveOpen] = useState(false);

  const onDeleteCard = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newColumns = data.map((item) => {
      if (item.title === column) {
        return {
          ...item,
          cards: item.cards.filter((card) => card !== title)
        };
      }

      return {...item};
    });

    setColumns(newColumns);
    updateStorage(newColumns);
  };

  const onSelectColumnToMove = (newColumn) => {
    const newColumns = data.map((item) => {
      if (item.title === column) {
        return {
          ...item,
          cards: item.cards.filter((card) => card !== title)
        };
      }

      if (item.title === newColumn) {
        return {
          ...item,
          cards: [...item.cards, title]
        };
      }

      return {...item};
    });

    setColumns(newColumns);
    updateStorage(newColumns);
    setIsMoveOpen(false);
  };

  if (editCardOpen === false) {
    return (
      <div className='card' onClick={() => setEditCardOpen(true)}>
        {title}

        <div className='card__options'>
          <span onClick={onDeleteCard}>
            <DeleteIcon size={14} />
          </span>
          <span onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMoveOpen(true);
          }}>
            <RightIcon size={16} />
          </span>
          <DropDown isOpen={isMoveOpen} onSelectOption={onSelectColumnToMove} options={options} />
        </div>
      </div>
    );
  }

  const onUpdateCardContent = (content) => {
    onEditCard(title, content);
    setEditCardOpen(false);
  };

  return (
    <ContentForm
      contentType='card'
      dark
      defaultContent={title}
      isEdit
      isTextArea
      onClose={() => setEditCardOpen(false)}
      onSaveContent={onUpdateCardContent}
    />
  );
};

export default Card;

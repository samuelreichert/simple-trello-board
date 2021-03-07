import { useState } from 'react';

import AddContent from '../AddContent';
import Column from '../Column';
import { fetchStorage, updateStorage } from '../../storage';

import './Columns.css';

const Columns = () => {
  const data = fetchStorage();
  const [columns, setColumns] = useState(data ?? []);

  const onSaveColumn = (title) => {
    const newColumns = [...columns];
    newColumns.push({ title, cards: [], position: parseInt(newColumns.length + '0') });
    setColumns(newColumns);
    updateStorage(newColumns);
  };

  const onUpdateCards = (title, position, newCards) => {
    const newColumns = columns.filter((column) => column.title !== title);
    newColumns.push({ title, cards: newCards, position });
    setColumns(newColumns);
    updateStorage(newColumns);
  };

  const sortedColumns = columns.sort((a, b) => {
    return a.position - b.position;
  });

  return (
    <div className='columns-list'>
      {sortedColumns.map((column, i) => (
        <Column
          cards={column.cards}
          key={i}
          position={column.position}
          title={column.title}
          updateCards={onUpdateCards}
          setColumns={setColumns}
        />
      ))}
      <div className='column column--add'>
        <AddContent contentType='column' hasContent={columns.length > 0} onSaveContent={onSaveColumn} />
      </div>
    </div>
  );
};

export default Columns;

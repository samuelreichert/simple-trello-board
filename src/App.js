import { useState } from 'react';
import AddContent from './components/AddContent';
import { fetchStorage, updateStorage } from './storage';
import "./App.css";

const App = () => {
  const data = fetchStorage();
  console.log({ columns: data });
  const [columns, setColumns] = useState(data ?? []);
  console.log(columns);

  const onSaveColumn = (title) => {
    const newColumns = [...columns];
    newColumns.push({ title, cards: [] });
    setColumns(newColumns);
    updateStorage(newColumns);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(/trello-background.png)`,
        backgroundSize: "cover",
      }}
    >
      <header className="app__header">
        <h1 className="app__title">Trello Board</h1>
      </header>

      <div className="columns-list">
        {columns.map((column) => (
          <div className="column">
            <h4>{column.title}</h4>
          </div>
        ))}
        <div className="column column--add">
          <AddContent contentType="column" onSaveContent={onSaveColumn}/>
        </div>
      </div>
    </div>
  );
};

export default App;

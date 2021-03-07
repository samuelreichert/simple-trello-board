import { useState } from "react";

import "./AddContent.css";

const AddContent = ({ contentType, isTextArea = false, onSaveContent }) => {
  const [inputOpen, setInputOpen] = useState(false);
  const [content, setContent] = useState('');

  const onClickAdd = () => {
    onSaveContent(content);
    setInputOpen(false);
  }

  if (inputOpen === false) {
    return (
      <button
        className="add-content-button"
        onClick={() => setInputOpen(true)}
      >
        + Add another {contentType}
      </button>
    );
  }

  return (
    <div className="add-content-form">
      <div className="add-content-input-container">
        {isTextArea ? (
          <textarea
            className="add-content-input"
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder={`Enter ${contentType} title...`}
            rows="4"
          />
        ) : (
          <input
            className="add-content-input"
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder={`Enter ${contentType} title...`}
            type="text"
          />
        )}

        <span className="close-button" onClick={() => setInputOpen(false)}>&times;</span>
      </div>
      <button className="add-content-button add-content-button--save" onClick={onClickAdd}>
        Add {contentType}
      </button>
    </div>
  );
};

export default AddContent;

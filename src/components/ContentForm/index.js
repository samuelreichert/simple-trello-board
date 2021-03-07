import { useState } from 'react';

import './ContentForm.css';

const ContentForm = ({
  contentType,
  dark,
  defaultContent,
  isEdit = false,
  isTextArea,
  onClose,
  onSaveContent,
}) => {
  const [content, setContent] = useState('');

  return (
    <div className='content-form'>
      <div className='content-input-container'>
        {isTextArea ? (
          <textarea
            className='content-input'
            defaultValue={defaultContent}
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder={`Enter ${contentType} title...`}
            rows='4'
          />
        ) : (
          <input
            className='content-input'
            defaultValue={defaultContent}
            onChange={(e) => setContent(e.currentTarget.value)}
            placeholder={`Enter ${contentType} title...`}
            type='text'
          />
        )}

        <span
          className={`close-button ${dark ? 'close-button--dark' : ''}`}
          onClick={onClose}
        >
          &times;
        </span>
      </div>
      <button
        className='add-content-button add-content-button--save'
        onClick={() => onSaveContent(content)}
      >
        {isEdit ? 'Edit' : 'Add'} {contentType}
      </button>
    </div>
  );
};

export default ContentForm;

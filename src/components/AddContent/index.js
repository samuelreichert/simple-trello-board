import { useState } from 'react';

import ContentForm from '../ContentForm';
import './AddContent.css';

const AddContent = ({
  contentType,
  dark = false,
  defaultContent,
  hasContent,
  isOpen = false,
  isTextArea = false,
  onSaveContent
}) => {
  const [inputOpen, setInputOpen] = useState(isOpen);

  const onClickSave = (content) => {
    onSaveContent(content);
    setInputOpen(false);
  };

  if (inputOpen === false) {
    return (
      <button
        className={`add-content-button ${dark ? 'add-content-button--dark' : ''}`}
        onClick={() => setInputOpen(true)}
      >
        + Add {hasContent ? 'another' : 'a'} {contentType}
      </button>
    );
  }

  return (
    <ContentForm
      contentType={contentType}
      dark={dark}
      defaultContent={defaultContent}
      isTextArea={isTextArea}
      onClose={() => setInputOpen(false)}
      onSaveContent={onClickSave}
    />
  );
};

export default AddContent;

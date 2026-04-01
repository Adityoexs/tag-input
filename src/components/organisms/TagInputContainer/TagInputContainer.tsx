import React, { useState } from 'react';
import TagPill from '../../atoms/TagPill/TagPill';
import TagInput from '../../atoms/TagInput/TagInput';
import './TagInputContainer.css';

const TagInputContainer: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') return;
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (tags.includes(trimmed)) return;
    setTags([...tags, trimmed]);
    setInputValue('');
  };

  const handleRemove = (tag: string): void => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="tag-input-container" aria-label="Tag input container">
      {tags.length > 0 && (
        <div className="tag-input-container__pills">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} onRemove={() => handleRemove(tag)} />
          ))}
        </div>
      )}
      <TagInput
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag…"
      />
      <p className="tag-input-container__hint">Press Enter to add a tag</p>
    </div>
  );
};

export default TagInputContainer;

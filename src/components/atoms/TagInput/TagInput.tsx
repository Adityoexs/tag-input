import React from 'react';
import './TagInput.css';

interface TagInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <input
      className="tag-input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={placeholder ?? 'Add a tag…'}
      aria-label="Tag input"
    />
  );
};

export default TagInput;

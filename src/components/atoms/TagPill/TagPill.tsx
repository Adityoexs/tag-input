import React from 'react';
import './TagPill.css';

interface TagPillProps {
  label: string;
  onRemove: () => void;
}

const TagPill: React.FC<TagPillProps> = ({ label, onRemove }) => {
  return (
    <span className="tag-pill">
      <span className="tag-pill__label">{label}</span>
      <button
        className="tag-pill__remove"
        onClick={onRemove}
        aria-label={`Remove tag ${label}`}
        type="button"
      >
        ×
      </button>
    </span>
  );
};

export default TagPill;

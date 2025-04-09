'use client';

import React from 'react';

interface FormTextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  required?: boolean;
  minHeight?: string;
  maxHeight?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  hasError = false,
  required = false,
  minHeight = '100px',
  maxHeight = '300px',
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`form-input ${hasError ? 'border-red-500' : ''}`}
      style={{
        minHeight,
        maxHeight,
        resize: 'vertical',
      }}
      required={required}
      aria-required={required}
      aria-invalid={hasError}
      aria-describedby={hasError ? `${id}-error` : undefined}
    />
  );
};

export default FormTextArea;

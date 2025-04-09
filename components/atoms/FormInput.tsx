'use client';

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  className?: string;
}

export default function FormInput({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  hasError = false,
  className = '',
}: FormInputProps) {
  return (
    <input
      className={`form-input ${hasError && 'border-red-500'} ${className}`}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

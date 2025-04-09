'use client';

interface FormButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function FormButton({
  text,
  type = 'submit',
  onClick,
  className = '',
  disabled = false,
}: FormButtonProps) {
  return (
    <button
      className={`form-button w-full sm:w-auto sm:self-center mt-2 ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

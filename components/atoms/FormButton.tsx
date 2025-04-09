'use client';

interface FormButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  'aria-busy'?: boolean;
}

export default function FormButton({
  text,
  type = 'submit',
  onClick,
  className = '',
  disabled = false,
  'aria-busy': ariaBusy = false,
}: FormButtonProps) {
  return (
    <button
      className={`form-button w-full sm:w-auto sm:self-center mt-2 ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-busy={ariaBusy}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
}

'use client';
interface CallToActionButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function CallToActionButton({
  text,
  onClick,
  disabled = false,
  ariaLabel,
  type = 'button',
}: CallToActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      aria-disabled={disabled}
      className={`
        custom-margin text-pink-500 bg-gold-200
        py-2 px-4 rounded-3xl border-4 border-pink-200
        text-[clamp(1rem,2vw,2rem)] font-bold
        transition-all duration-200 ease-in-out
        hover:scale-105 hover:bg-gold-300
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-blue-700
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
}

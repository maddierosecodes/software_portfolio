'use client';

import FormLabel from '../atoms/FormLabel';
import FormInput from '../atoms/FormInput';
import FormTextArea from '../atoms/FormTextArea';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  errorMessage?: string;
  isTextArea?: boolean;
  textAreaProps?: {
    minHeight?: string;
    maxHeight?: string;
  };
}

export default function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage = '',
  isTextArea = false,
  textAreaProps = {},
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 group">
      <FormLabel htmlFor={id}>{label}</FormLabel>

      {isTextArea ? (
        <FormTextArea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
          hasError={!!errorMessage}
          minHeight={textAreaProps.minHeight}
          maxHeight={textAreaProps.maxHeight}
        />
      ) : (
        <FormInput
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
          hasError={!!errorMessage}
        />
      )}

      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

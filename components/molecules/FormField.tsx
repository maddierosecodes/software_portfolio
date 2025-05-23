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
  required?: boolean;
  textAreaProps?: {
    minHeight?: string;
    maxHeight?: string;
  };
  itemProp?: string;
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
  required = false,
  textAreaProps = {},
  itemProp,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 group">
      <FormLabel htmlFor={id} required={required}>
        {label}
      </FormLabel>

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
          required={required}
          minHeight={textAreaProps.minHeight}
          maxHeight={textAreaProps.maxHeight}
          itemProp={itemProp}
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
          required={required}
          itemProp={itemProp}
        />
      )}

      {errorMessage && (
        <p className="text-red-500 text-sm mt-1" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

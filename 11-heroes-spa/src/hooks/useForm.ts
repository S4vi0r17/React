import { useState, ChangeEvent } from 'react';

export function useForm<T extends Record<string, unknown>>(
  initialForm: T = {} as T
) {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
}

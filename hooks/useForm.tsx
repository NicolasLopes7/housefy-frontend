import { useEffect, useState } from 'react';

type UseForm<T = any> = [
  { defaultState: T; formState: T },
  {
    handleFormChange: (keyValue: keyof T) => (event: any) => void;
    setFormState: (state: any) => void;
    resetState: () => void;
  }
];

const useForm = <T = any,>(
  defaultState: any = {},
  dependencies: any[] = []
): UseForm<T> => {
  const [formState, setFormState] = useState<any>(defaultState);

  const handleFormChange = (name) => (e) => {
    setFormState({ ...formState, [name]: e?.target?.value ?? e });
  };

  useEffect(() => {
    if (dependencies?.length) setFormState(defaultState);
  }, dependencies);

  const resetState = () => {
    setFormState(defaultState);
  };

  return [
    { defaultState, formState },
    { handleFormChange, setFormState, resetState },
  ];
};

export default useForm;

import { useState, useEffect } from 'react';

const useLocalStorageState = <T>(key: string, defaultValue?: T) => {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, setState };
};

export default useLocalStorageState;

import { useEffect, useState } from "react";

type Listener<T> = (value: T) => void;

const store = new Map<string, unknown>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const listeners = new Map<string, Set<Listener<any>>>();

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // initialize singleton store once
  if (!store.has(key)) {
    try {
      const item = localStorage.getItem(key);

      store.set(
        key,
        item ? JSON.parse(item) : initialValue
      );
    } catch {
      store.set(key, initialValue);
    }
  }

  const [state, setState] = useState<T>(
    store.get(key) as T
  );

  useEffect(() => {
    if (!listeners.has(key)) {
      listeners.set(key, new Set());
    }

    const keyListeners = listeners.get(key)!;

    const listener: Listener<T> = (value) => {
      setState(value);
    };

    keyListeners.add(listener);

    return () => {
      keyListeners.delete(listener);
    };
  }, [key]);

  const setValue: React.Dispatch<React.SetStateAction<T>> = (
    value
  ) => {
    const currentValue = store.get(key) as T;

    const valueToStore =
      value instanceof Function
        ? value(currentValue)
        : value;

    // update singleton memory
    store.set(key, valueToStore);

    // persist
    localStorage.setItem(
      key,
      JSON.stringify(valueToStore)
    );

    // notify all hook instances
    listeners.get(key)?.forEach((listener) => {
      listener(valueToStore);
    });
  };

  return [state, setValue];
}
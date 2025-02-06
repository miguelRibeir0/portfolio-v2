import { useEffect, useSyncExternalStore } from 'react';

// getting the initial value
function getSnapshot(): boolean {
  const stored = localStorage.getItem('isDark');
  if (stored) {
    try {
      return JSON.parse(stored) === true;
    } catch (e) {
      console.error('Error parsing isDark from localStorage', e);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// listening for changes
function subscribe(callback: () => void): () => void {
  window.addEventListener('storage', callback);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    mediaQuery.removeEventListener('change', callback);
  };
}

export function useDarkMode(): [boolean, (value: boolean) => void] {
  const isDark = useSyncExternalStore(subscribe, getSnapshot);

  const setIsDark = (value: boolean) => {
    localStorage.setItem('isDark', JSON.stringify(value));
    document.documentElement.classList.toggle('dark', value);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
}

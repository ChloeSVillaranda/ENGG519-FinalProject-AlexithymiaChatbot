import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
  // Check system preference on initialization
  const getInitialTheme = (): boolean => {
    if (!browser) return false;
    
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const { subscribe, set, update } = writable<boolean>(getInitialTheme());

  return {
    subscribe,
    toggle: () => update(val => {
      const newVal = !val;
      if (browser) {
        localStorage.setItem('darkMode', String(newVal));
        document.documentElement.classList.toggle('dark', newVal);
      }
      return newVal;
    }),
    set: (value: boolean) => {
      if (browser) {
        localStorage.setItem('darkMode', String(value));
        document.documentElement.classList.toggle('dark', value);
      }
      set(value);
    }
  };
}

export const darkMode = createThemeStore();

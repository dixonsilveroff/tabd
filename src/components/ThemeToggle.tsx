'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tabd-theme') as 'light' | 'dark';
    if (saved) {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('tabd-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Avoid hydration mismatch by rendering a placeholder of same size before mount
  if (!mounted) {
    return <div style={{ width: 38, height: 38 }} />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-colors cursor-pointer flex items-center justify-center"
      style={{ background: 'none', border: 'none' }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={22} style={{ color: 'var(--text-navbar)' }} />
      ) : (
        <Sun size={22} style={{ color: 'var(--text-navbar)' }} />
      )}
    </button>
  );
}

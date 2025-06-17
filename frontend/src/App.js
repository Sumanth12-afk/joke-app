import React, { useEffect, useState } from 'react';
import './App.css';

const categories = ['general', 'dad', 'programming'];

function App() {
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState('light');

  const fetchJoke = async (cat) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3001/api/joke?category=${cat}`);
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setJoke('');
      } else {
        setJoke('');
        setTimeout(() => setJoke(data.joke), 150); // animate in
      }
    } catch {
      setError('Failed to fetch joke.');
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(joke);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    fetchJoke(category);
  }, [category]);

  return (
    <div className={`app ${theme}`} data-theme={theme}>
      <div className="header">
        <h1>
          <span className="emoji">😂</span>
          <span className="title-text">Random Joke Generator</span>
        </h1>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <div className="radio-group" role="radiogroup" aria-label="Joke Categories">
        <div className="radios">
          {categories.map((cat) => (
            <label key={cat} className="radio-option">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={(e) => setCategory(e.target.value)}
                aria-checked={category === cat}
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>
        <button onClick={() => fetchJoke(category)}>Get Another Joke</button>
      </div>

      <div className={`joke-box ${category} fade-in`}>
        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <p className="error" role="alert">{error}</p>
        ) : (
          <>
            <p className="joke-text">{joke}</p>
            <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
            {copied && <div className="copied-msg">Copied!</div>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
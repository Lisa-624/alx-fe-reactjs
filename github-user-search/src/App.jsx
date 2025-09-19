import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import { fetchUserData } from './services/githubService.js';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setUser(null);
    setError('');
    setLoading(true);
    try {
      const response = await fetchUserData(username);
      setUser(response.data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'blue' }}
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;



import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService.js';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '8px', width: '200px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px' }}>
          Search
        </button>
      </form>

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

export default Search;


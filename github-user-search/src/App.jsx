import { useState } from 'react';
import Search from './components/Search';
import { searchUsers } from './services/githubService';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (params) => {
    setLoading(true);
    setError('');
    setUsers([]);
    try {
      const results = await searchUsers(params);
      setUsers(results);
    } catch {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-3"
            />
            <h3 className="font-bold text-lg">{user.name || user.login}</h3>
            <p className="text-sm text-gray-500">{user.location || 'N/A'}</p>
            <p className="text-sm text-gray-700 mb-2">
              Repos: {user.public_repos}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



import axios from 'axios';

export const searchUsers = async ({ username, location, minRepos }) => {
  // Build query string
  let query = '';
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // Call GitHub Search API
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  // Fetch additional details for each user
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return {
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        name: userDetails.data.name,
        public_repos: userDetails.data.public_repos,
        location: userDetails.data.location,
      };
    })
  );

  return detailedUsers;
};

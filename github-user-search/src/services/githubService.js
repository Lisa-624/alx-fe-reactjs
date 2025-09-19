import axios from 'axios';

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Promise} Axios response
 */
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  return axios.get(url);
};

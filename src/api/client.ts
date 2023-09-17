import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',
  headers: {
    Authorization: '', // Better use ENV, but decided not to do this, cuz it's already too complicated for test task :)
  },
});

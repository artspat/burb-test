import { apiClient } from '../api';

export const requestShowById = (showId) => apiClient.get(`/shows/${showId}?embed=episodes`);
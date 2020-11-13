import { apiClient } from '../api';

export const requestEpisodeById = (episodeId) => apiClient.get(`/episodes/${episodeId}?embed=show`);
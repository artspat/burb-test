import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEpisodesLoadingSelector, episodesSelector, episodesErrorSelector } from './selectors';
import { fetchEpisode, getEpisodeById } from './slice';

export const useEpisode = (episodeId) => {
    const dispatch = useDispatch();
    const episodes = useSelector(episodesSelector);
    const isLoading = useSelector(isEpisodesLoadingSelector);
    const error = useSelector(episodesErrorSelector);

    const episode = useMemo(() => {
        return getEpisodeById(episodes, episodeId);
    }, [episodes, episodeId]);

    useEffect(() => {
        if (!episode) {
            dispatch(fetchEpisode(episodeId));
        }
    }, [dispatch, episode, episodeId]);

    return { episode, isLoading, error };
}

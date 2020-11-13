import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isShowLoadingSelector, showsErrorSelector, showsSelector } from './selectors';
import { fetchShow, getShowById } from './slice';

export const useShow = (showId) => {
    const dispatch = useDispatch();
    const shows = useSelector(showsSelector);
    const isLoading = useSelector(isShowLoadingSelector);
    const error = useSelector(showsErrorSelector);

    const show = useMemo(() => {
        return getShowById(shows, showId);
    }, [shows, showId]);

    useEffect(() => {
        if (!show) {
            dispatch(fetchShow(showId));
        }
    }, [dispatch, show, showId]);

    return { show, isLoading, error };
}
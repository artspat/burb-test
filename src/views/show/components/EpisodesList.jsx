import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { orderBy } from 'lodash';
import { getDateString } from '../../../utils';
import './EpisodesList.scss';
import { Pagination } from '../../../components';

const PAGE_SIZE = 10;

export const EpisodesList = ({ episodes = [] }) => {
    const [page, setPage] = useState(0);

    const ordered = useMemo(() => {
        return orderBy(episodes, 'id', 'desc');
    }, [episodes]);

    const pageItems = useMemo(() => {
        return ordered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
    }, [ordered, page]);

    const handlePageChange = ({ selected }) => setPage(selected);

    return (
        <div className="episodes-list">
            <h2 className="episodes-list__title">Previous episodes ({episodes.length}):</h2>
            <div className="episodes-list__table">
                <div className="episodes-list__table-row episodes-list__table-row--header">
                    <div className="episodes-list__table-row-value">Episode Name</div>
                    <div className="episodes-list__table-row-date">Airdate</div>
                </div>
                {pageItems.map((episode) => (
                    <div className="episodes-list__table-row" key={episode.id}>
                        <div className="episodes-list__table-row-value">
                            <span>{episode.season}x{episode.number}:&nbsp;</span>
                            <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                        </div>
                        <div className="episodes-list__table-row-date">{getDateString(episode.airdate)}</div>
                    </div>
                ))}
                <Pagination pageSize={PAGE_SIZE} count={episodes.length} onChange={handlePageChange} />
            </div>
        </div>
    );
};

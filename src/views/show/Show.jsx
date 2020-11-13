import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { Error, Image, InfoCard } from '../../components';
import { EpisodesList } from './components';
import { useShow } from '../../store';
import './Show.scss';

export const Show = () => {
    const { showId } = useParams();
    const { show, isLoading, error } = useShow(showId);

    const info = useMemo(() => {
        return [
            { title: 'Status', value: show?.status },
            { title: 'Show Type', value: show?.type },
            { title: 'Genres', value: show?.genres?.join(' | ') },
        ];
    }, [show]);

    if (isLoading) {
        return <ContentLoader />;
    }

    return error ? (
        <Error text={error}></Error>
    ) : (
        <div className="show">
            <h1 className="show__title">{show.name}</h1>
            <div className="show__box">
                <div className="show__box-big">
                    <div className="show__box-content">
                        <Image className="show__box-content-small" image={show.image} name={show.name} />
                        <div className="show__box-content-big" dangerouslySetInnerHTML={{ __html: show.summary }} />
                    </div>
                </div>
                <div className="show__box-small">
                    <InfoCard title="Show Info" values={info} rating={show.rating?.average} />
                </div>
            </div>
            
            <div className="show__box">
                <div className="show__box-big">
                    <EpisodesList episodes={show._embedded.episodes} />
                </div>
            </div>
        </div>
    );
}


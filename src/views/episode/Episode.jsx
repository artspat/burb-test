import React, { useMemo } from 'react';
import ContentLoader from 'react-content-loader';
import { Link, useParams } from 'react-router-dom';
import { Error, Image, InfoCard } from '../../components';
import { useEpisode } from '../../store';
import './Episode.scss';

export const Episode = () => {
    const { episodeId } = useParams();
    const { episode, isLoading, error } = useEpisode(episodeId);

    const info = useMemo(() => {
        const show = episode?._embedded.show;
        if (!episode || !show) {
            return [];
        }

        return [
            { 
                title: 'Show', 
                value: <Link to={`/${show.id}`}>{show.name}</Link>,
            },
            { title: 'Number', value: `Season ${episode.season}, Episode ${episode.number}` },
            { title: 'Runtime', value: `${episode.runtime} minutes` },
        ];
    }, [episode]);
    
    if (isLoading) {
        return <ContentLoader />;
    }

    return error ? (
        <Error text={error}></Error>
    ) : (
        <div className="episode">
            <h1 className="episode__title">{episode?.name}</h1>
            <div className="episode__box">
                <div className="episode__box-big">
                    <div className="episode__box-content">
                        <Image className="episode__box-content-small" image={episode?.image} name={episode?.name} />
                        <div className="episode__box-content-big" dangerouslySetInnerHTML={{ __html: episode?.summary }} />
                    </div>
                </div>
                <div className="episode__box-small">
                    <InfoCard title="Episode Info" values={info} rating={episode?.rating?.average} />
                </div>
            </div>
        </div>
    );
}


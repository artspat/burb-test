import React from 'react';
import cx from 'classnames';
import { Rating } from '../Rating';
import './InfoCard.scss';

export const InfoCard = ({ className = '', title, values = [], rating = -1 }) => {
    return (
        <div className={cx('b-info-card', className)}>
            <h3 className="b-info-card__title">{title}</h3>
            {values.length && values.map((item, index) => (
                <div key={`${item.title}_${index}`} className="b-info-card__item">
                    <span className="b-info-card__item-title">{item.title}:&nbsp;</span>
                    <span>{item.value}</span>
                </div>
            ))}
            {rating !== -1 && (
                <div className="b-info-card__rating">
                    <Rating value={rating} />
                </div>
            )}
        </div>
    );
};

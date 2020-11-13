import React from 'react';
import cx from 'classnames';
import StarRatings from 'react-star-ratings';
import './Rating.scss';

export const Rating = ({ className = '', value = 0 }) => {
    let clarifiedValue = value;
    if (value > 10) {
        clarifiedValue = 10;
    }
    if (value < 0) {
        clarifiedValue = 0;
    }
    
    return (
        <div className={cx('b-rating', className)}>
            <StarRatings
                name='rating'
                rating={clarifiedValue}
                starSpacing="1px"
                numberOfStars={10}
                starDimension="16px"
                starRatedColor="red"
            />
            <span className="b-rating__value">{clarifiedValue}</span>
        </div>
    );
};

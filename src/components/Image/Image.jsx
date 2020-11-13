import React from 'react';
import cx from 'classnames';
import './Image.scss';

const DEFAULT_IMAGE = '//static.tvmaze.com/images/no-img/no-img-landscape-text.png';

export const Image = ({ image, name = '', className = '' }) => {
    if (!image || !image.medium || !image.original) {
        return (
            <div className={cx('b-image', className)}>
                <img className="b-image__image" alt={name} src={DEFAULT_IMAGE} />
            </div>
        );
    }

    return (
        <a href={image.original} target="__blank" className={cx('b-image', className)}>
            <img className="b-image__image" alt={name} src={image.medium} />
        </a>
    );
};

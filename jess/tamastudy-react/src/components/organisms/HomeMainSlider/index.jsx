import React from 'react';
import Swiper from 'react-id-swiper';
import { v4 as uuidv4 } from 'uuid';
import { css } from '@emotion/core';
import mediaQuery from '../../../theme/mediaQuery';

const DUMMY_DATA = [
  {
    id: uuidv4(),
    imgSrc:
      'https://images.unsplash.com/photo-1582787264476-ceb5898497c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuidv4(),
    imgSrc:
      'https://images.unsplash.com/photo-1528150230181-99bbf7b22162?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuidv4(),
    imgSrc:
      'https://images.unsplash.com/photo-1557231146-afde25e6598f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
];

const HomeMainSlider = ({ ...props }) => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
    <div {...props}>
      <Swiper {...params}>
        {DUMMY_DATA.map((data) => (
          <div
            key={data.id}
            css={css`
              width: 100vw;
              height: 400px;
              ${mediaQuery(2)} {
                height: 600px;
              }
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
              src={data.imgSrc}
              alt={data.imgAlt}
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeMainSlider;

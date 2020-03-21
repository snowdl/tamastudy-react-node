import React from 'react';
import Swiper from 'react-id-swiper';
import uuid from 'uuid/v4';
import { css } from '@emotion/core';

const DUMMY_DATA = [
  {
    id: uuid(),
    imgSrc: 'https://www.linefriends.com/im/img_ip_thumb1.jpg',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/42864318_1925885434379434_3039358079738052608_n.jpg?_nc_cat=103&_nc_oc=AQmVhJk3TTq0F7Q_8t27jGEkr3hgbbM4ExamHvlxj-RTvJnRPY7D3OjciTjbxLXghlA&_nc_ht=scontent-nrt1-1.xx&oh=e65ee215a44cda31a5729f4f0f346347&oe=5EF608B6',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://dtimes-jp.exactdn.com/wp-content/uploads/2019/08/pressrelease_brownday_20190710.png?strip=all&lossy=1&resize=974%2C692&ssl=1',
    imgAlt: 'sample image',
  },
];

const HomeMainSlider = () => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.main-pagination',
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      {DUMMY_DATA.map((data) => (
        <div
          css={css`
            width: 100vw;
            height: 60rem;
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
  );
};

export default HomeMainSlider;

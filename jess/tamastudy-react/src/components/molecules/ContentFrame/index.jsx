import React from 'react';
import ContentTitle from '../ContentTitle';

const ContentFrame = ({ text, children, ...props }) => {
  return (
    <div {...props}>
      <ContentTitle text={text} />
      {children}
    </div>
  );
};

export default ContentFrame;

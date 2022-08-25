import React from 'react';
import MainLayout from './Main';

const Video = props => {
  // eslint-disable-next-line react/prop-types
  const { recipebook } = props;
  return <MainLayout recipebook={recipebook} />;
};

export default Video;

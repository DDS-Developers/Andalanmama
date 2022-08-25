import React from 'react';
import { string } from 'prop-types';
import MetaTags from 'react-meta-tags';
import window from 'global/window';

const MetaTag = props => {
  const title = props.title || 'Andalan Mama by Filma';
  const description = props.description || 'Hidangkan masakan terbaik untuk keluarga dengan Filma';
  const permalink = window.location.href;

  return (
    <MetaTags>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={permalink} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={props.image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={permalink} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={props.image} />
    </MetaTags>
  );
};

MetaTag.propTypes = {
  title: string,
  description: string,
  image: string,
};

export default MetaTag;

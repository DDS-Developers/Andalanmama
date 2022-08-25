import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardVideo from '../index';

storiesOf('CardVideo', module)
  .add('Card Video', () => (
    <Router>
      <CardVideo
        thumbnail="https://placeimg.com/640/640/tech"
        videoUrl="http://youtube.com/sjdksjdk"
        thumbnailRadius={false}
        width="700px"
        height="380px"
        margin="40px"
      />
    </Router>
  ))
  .add('Card Video With Info', () => (
    <Router>
      <CardVideo
        thumbnail="https://placeimg.com/640/640/tech"
        videoUrl="http://youtube.com/sjdksjdk"
        thumbnailRadius={false}
        width="740px"
        height="410px"
        margin="40px"
        info={{
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          user: 'Andalan Mama',
          time: '2 week ago',
        }}
      />
    </Router>
  ));

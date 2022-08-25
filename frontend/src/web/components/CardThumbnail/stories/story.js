import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardThumbnail from '../index';

storiesOf('CardThumbnail', module)
  .add('Card Thumbnail', () => (
    <Router>
      <CardThumbnail
        column="3"
        margin="30px"
        title="Tips Mengolah Daging Sapi Agar Empuk!"
        permalink="/receipe/1"
        image="https://placeimg.com/640/640/tech"
        user="Andalan Mama"
        time="2 week ago"
      />
    </Router>
  ))
  .add('Card Thumbnail Full', () => (
    <Router>
      <CardThumbnail
        margin="30px"
        height="500px"
        title="Tips Mengolah Daging Sapi Agar Empuk!"
        permalink="/receipe/1"
        image="https://placeimg.com/640/640/tech"
        user="Andalan Mama"
        time="2 week ago"
      />
    </Router>
  ));

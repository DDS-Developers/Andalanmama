import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CardSlider from '../index';

storiesOf('CardSlider', module).add('Card Slider', () => (
  <Router>
    <CardSlider
      favoriteButton={{
        title: 'Lihat Resep Terfavorit',
        permalink: '/favorite',
      }}
      items={[
        {
          id: 1,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '1 week ago',
        },
        {
          id: 2,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '2 week ago',
        },
        {
          id: 3,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '3 week ago',
        },
        {
          id: 4,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '4 week ago',
        },
        {
          id: 5,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '5 week ago',
        },
        {
          id: 6,
          title: 'Tips Mengolah Daging Sapi Agar Empuk!',
          permalink: '/receipe/1',
          image: 'https://placeimg.com/640/640/tech',
          user: 'Andalan Mama',
          time: '6 week ago',
        },
      ]}
    />
  </Router>
));

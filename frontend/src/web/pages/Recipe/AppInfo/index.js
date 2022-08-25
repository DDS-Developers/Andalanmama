import React from 'react';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import ButtonGooglePlay from '../../Homepage/AppInfo/ButtonGooglePlay';
import Wrapper from './Wrapper';

const AppInfo = () => (
  <Wrapper className="_section--app-info">
    <Title className="_info--title" size={800} color="primary">
      Create your own recipe book and share with others
    </Title>
    <Text className="_info--text" size={500}>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts away. Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts away.
    </Text>
    <div className="_info--action">
      <ButtonGooglePlay />
    </div>
  </Wrapper>
);

export default AppInfo;

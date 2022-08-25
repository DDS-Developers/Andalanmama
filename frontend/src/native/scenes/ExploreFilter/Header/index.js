/**
 * scenes/ExploreFilter/Header/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { Header, Left, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ButtonIcon from '../../../components/ButtonIcon';
import Body from './BodyWrapper';
import Form from './Form';
import ButtonFilter from './ButtonFilter';

const ExploreFilterHeader = props => {
  const navigation = useNavigation();

  return (
    <Header style={{ backgroundColor: '#ffffff' }}>
      <StatusBar backgroundColor="#e83249" barStyle="light-content" />
      <Left style={{ flex: 1 }}>
        <ButtonIcon
          iconType="MaterialIcons"
          iconName="arrow-back"
          handler={() => {
            navigation.goBack();
          }}
        />
      </Left>
      <Body>
        <Form handler={props.searchHandler} />
      </Body>
      <Right style={{ flex: 1 }}>
        <ButtonFilter />
      </Right>
    </Header>
  );
};

ExploreFilterHeader.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default ExploreFilterHeader;

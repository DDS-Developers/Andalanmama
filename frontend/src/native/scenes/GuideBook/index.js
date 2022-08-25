/**
 * scenes/PrivacyPolicy/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container } from 'native-base';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Header from '../../components/Header';

export class GuideBook extends PureComponent {
  static navigationOptions = {
    title: 'Guide Book',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="Guide Book" leftSettings={{ type: 'back' }} />
        <Content>
          <Paragraph>Guide Book content</Paragraph>
        </Content>
      </Container>
    );
  }
}

export default GuideBook;

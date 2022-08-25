/**
 * scenes/UserVerification/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container } from 'native-base';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Header from '../../components/Header';
import Footer from '../../containers/Footer';

export class UserVerificationScene extends PureComponent {
  static navigationOptions = {
    title: 'User Verification',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="User Verification" leftSettings={{ type: 'back' }} />
        <Content>
          <Paragraph>User Verification content</Paragraph>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default UserVerificationScene;

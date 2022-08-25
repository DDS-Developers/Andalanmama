/* eslint-disable global-require */
/**
 * scenes/Login/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Container, View, Icon } from 'native-base';
// eslint-disable-next-line import/no-unresolved
import CheckBox from '@react-native-community/checkbox';

import { withAuth } from '../../providers/Auth';
import Paragraph from '../../components/Paragraph';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Texture from '../../images/texture-bg.png';
import LoginBg from './login-bg.png';
import Logo from './Logo.png';
import GoogleIcon from './google-icon.png';
import BottomWrapper from './BottomWrapper';
import ButtonIcon from './ButtonIcon';
import SigninTop from './SigninTop';

export class LoginScene extends PureComponent {
  static navigationOptions = {
    title: 'Masuk',
    header: null,
  };

  state = {
    checked: true,
  };

  componentDidMount() {
    const { loggedIn, navigation, route } = this.props;
    const { params } = route;

    if (loggedIn) {
      navigation.navigate('Explore');
    } else if (params && params.redirect) {
      this.props.setRedirect(params.redirect);
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header title="Masuk" leftSettings={{ type: 'back' }} />
        <Content>
          <ImageBackground
            source={Texture}
            resizeMode="cover"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: 'absolute',
            }}
          />

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <SigninTop style={{ height: '40%' }}>
              <Image style={{ height: 50, zIndex: 1 }} source={Logo} resizeMode="contain" />
              <ImageBackground
                source={LoginBg}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  top: 0,
                  position: 'absolute',
                }}
              />
            </SigninTop>

            <View style={{ paddingTop: 10, paddingHorizontal: 30 }}>
              <ButtonIcon block iconLeft onPress={() => {
                if (this.state.checked) {
                  this.props.doLoginGoogle()
                }
              }} style={{ opacity: (this.state.checked ? 1 : 0.5) }}>
                <Image
                  source={GoogleIcon}
                  resizeMode="contain"
                  style={{ marginRight: 14, marginLeft: 18, width: 24 }}
                />
                <Text>Masuk dengan akun Google</Text>
              </ButtonIcon>
              <ButtonIcon
                block
                iconLeft
                style={{ backgroundColor: '#475993', opacity: (this.state.checked ? 1 : 0.5) }}
                onPress={() => {
                if (this.state.checked) {
                    this.props.doLoginFacebook()
                  }
                }}
              >
                <Icon type="FontAwesome" name="facebook-square" style={{ marginRight: 14 }} />
                <Text color="#ffffff">Masuk dengan akun Facebook</Text>
              </ButtonIcon>
              <ButtonIcon
                block
                iconLeft
                style={{ backgroundColor: '#E83249', opacity: (this.state.checked ? 1 : 0.5) }}
                onPress={() => {
                if (this.state.checked) {
                    navigation.navigate('LoginForm')
                  }
                }}
              >
                <Icon type="MaterialIcons" name="email" style={{ marginRight: 14 }} />
                <Text color="#ffffff">Masuk dengan akun Email</Text>
              </ButtonIcon>
              <BottomWrapper>
                <Text style={{ marginRight: 6 }}>Belum punya akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{ fontWeight: 'bold' }}>Daftar</Text>
                </TouchableOpacity>
              </BottomWrapper>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked}
                  onValueChange={newValue => this.setState({ checked: newValue })}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Paragraph>
                    Saya menyetujui Syarat dan Ketentuan Andalan Mama dan data saya untuk diproses
                    sesuai dengan kebijakan privasi Andalan Mama.
                  </Paragraph>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

LoginScene.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  setRedirect: PropTypes.func,
  doLoginFacebook: PropTypes.func,
  doLoginGoogle: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default withAuth(LoginScene);

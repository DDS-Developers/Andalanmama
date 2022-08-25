/**
 * scenes/MyAccount/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Container, View, Card, CardItem, Body } from 'native-base';
import { compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../providers/TourGuide';
import { withAuth } from '../../providers/Auth';
import ButtonPrimary from '../../components/ButtonPrimary';
import Content from '../../components/Content';
import Text from '../../components/Text';
import Paragraph from '../../components/Paragraph';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
// import Debugger from '../../helpers/Debugger';
import MenuGroup from './MenuGroup';
import Profile from './Profile';

const menus = [
  [
    {
      path: 'ChangePassword',
      label: 'Ganti Password',
      icon: 'lock-outline',
      auth: true,
    },
  ],
  [
    {
      path: 'MyRecipeTab',
      label: 'Resep Saya',
      icon: 'developer-board',
      auth: true,
    },
    {
      path: 'RecipeBook',
      label: 'Buku Resep Saya',
      icon: 'book',
      auth: true,
    },
    {
      path: 'MyScheduleTab',
      label: 'Jadwal Masak Saya',
      icon: 'event',
      auth: true,
    },
    // {
    //   path: 'MyVoucher',
    //   label: 'Voucher Saya',
    //   icon: 'style',
    //   auth: true,
    // },
    {
      path: 'MyMessage',
      label: 'Kotak Masuk / Pesan Masuk',
      icon: 'email',
      auth: true,
    },
    {
      path: 'Bookmark',
      label: 'Ditandai',
      icon: 'bookmark',
      auth: true,
    },
    {
      path: 'ArticleTab',
      label: 'Artikel',
      icon: 'web',
      auth: true,
    },
    // {
    //   path: 'Community',
    //   label: 'Forum',
    //   icon: 'forum',
    //   auth: true,
    // },
  ],
  [
    {
      path: 'Help',
      label: 'Bantuan',
      icon: 'info-outline',
      auth: false,
    },
  ],
  [
    {
      path: 'Settings',
      label: 'Pengaturan',
      icon: 'settings',
      auth: false,
    },
  ],
];

export class MyAccountScene extends PureComponent {
  static navigationOptions = {
    title: 'Akun Saya',
    header: null,
  };

  state = {
    logoutConfirm: false,
  };

  componentDidMount() {
    this.blurUnsubscribe = this.props.navigation.addListener('blur', () => {
      this.onUnfocusScene();
    });

    this.focusUnsubscribe = this.props.navigation.addListener('focus', () => {
      this.onFocusScene();
    });
  }

  componentWillUnmount() {
    this.blurUnsubscribe();
    this.focusUnsubscribe();
  }

  onFocusScene = () => {
    this.checkSkipped();
  };

  onUnfocusScene = () => {
    const { setVisible } = this.props;
    setVisible(false);
  };

  checkSkipped = async () => {
    const { skipped, setStep, setVisible } = this.props;
    const myAccSkipped = await AsyncStorage.getItem('ANDALAN_TOUR_GUIDE_MY_ACCOUNT');
    // console.log(myAccSkipped);

    if (!skipped && !myAccSkipped) {
      setVisible(true);
      setStep(10);
    } else {
      setVisible(false);
    }
  };

  renderLogoutConfirm = () => {
    const { logoutConfirm } = this.state;

    return (
      <Dialog
        visible={logoutConfirm}
        title="Are You Sure?"
        message="Apakah anda yakin akan keluar?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  logoutConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  logoutConfirm: false,
                });
                this.props.doLogout();
              }}
            >
              Ok
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  render() {
    const { navigation, loggedIn } = this.props;

    return (
      <Container>
        <Header title="Akun" />
        <Content>
          {!loggedIn ? (
            <MenuGroup>
              <Card>
                <CardItem>
                  <Body style={{ alignItems: 'center', padding: 10 }}>
                    <Paragraph center>
                      Daftar atau Masuk untuk dapatkan {'\n'} inspirasi masak Andalan Mama
                    </Paragraph>
                    <View style={{ marginBottom: 15 }}>
                      <ButtonPrimary onPress={() => navigation.navigate('Login')}>
                        Daftar & Masuk
                      </ButtonPrimary>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text>Lupa Password</Text>
                      </TouchableOpacity>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </MenuGroup>
          ) : null}

          {loggedIn && <Profile onPressEdit={() => navigation.navigate('ProfileEdit')} />}

          {menus.map((menuItems, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MenuGroup key={`menu-group-${index}`}>
              <Card>
                {menuItems.map(menu => (
                  <MenuItem
                    key={menu.path}
                    label={menu.label}
                    icon={menu.icon}
                    target={menu.path}
                    disabled={menu.auth && !loggedIn}
                  />
                ))}
              </Card>
            </MenuGroup>
          ))}

          <MenuGroup>
            <Card>
              <MenuItem
                label="Keluar"
                type="Entypo"
                icon="log-out"
                disabled={!loggedIn}
                callback={() => {
                  this.setState({
                    logoutConfirm: true,
                  });
                }}
              />
            </Card>
          </MenuGroup>
        </Content>
        {loggedIn ? this.renderLogoutConfirm() : null}
      </Container>
    );
  }
}

MyAccountScene.propTypes = {
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
  skipped: PropTypes.bool,
  setStep: PropTypes.func,
  setVisible: PropTypes.func,
};

export default compose(
  withAuth,
  withTourGuide,
)(MyAccountScene);

/**
 * scenes/Profile/index.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, CardItem, Thumbnail, Text, Left, Body, H3, Icon, Spinner } from 'native-base';
import ContentClear from '../../components/ContentClear';
import Header from '../../components/Header';
import ProfileTabs from './ProfileTabs';

import { withUser } from '../../providers/User';

export class ProfileScene extends Component {
  static navigationOptions = {
    title: 'Profil',
    header: null,
  };

  componentDidMount() {
    const { route } = this.props;
    const { id } = route.params;

    if (id) {
      this.props.loadUserProfile(id);
    }
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  loader() {
    const { loadingUser } = this.props;
    if (loadingUser) {
      return <Spinner color="#888888" />;
    }
    return null;
  }

  render() {
    const { user, route } = this.props;
    const { id } = route.params;

    return (
      <Container>
        <Header title="Profil" leftSettings={{ type: 'back' }} />
        <ContentClear>
          {this.loader()}
          {user && user.count() > 0 ? (
            <CardItem
              style={{
                paddingTop: 30,
                paddingBottom: 30,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 0,
                marginBottom: 2,
              }}
            >
              <Left>
                {user.get('image') ? (
                  <Thumbnail
                    source={{ uri: user.get('image') }}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      marginRight: 15,
                      alignSelf: 'flex-start',
                    }}
                  />
                ) : (
                  <Icon
                    style={{ color: '#000000', fontSize: 70 }}
                    type="MaterialIcons"
                    name="account-circle"
                  />
                )}

                <Body>
                  <H3>{user.get('fullname')}</H3>
                  <Text note style={{ fontSize: 16 }}>
                    {user.get('username')}
                  </Text>
                  {user.get('description') ? (
                    <Text style={{ fontSize: 11 }}>{user.get('description')}</Text>
                  ) : null}
                </Body>
              </Left>
            </CardItem>
          ) : null}
          <ProfileTabs userId={id} />
        </ContentClear>
      </Container>
    );
  }
}

ProfileScene.propTypes = {
  route: PropTypes.object,
  loadUserProfile: PropTypes.func,
  loadingUser: PropTypes.bool,
  user: PropTypes.object,
  resetData: PropTypes.func,
};

export default withUser(ProfileScene);

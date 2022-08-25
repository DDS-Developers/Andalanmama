/**
 * scenes/MyScheduleEdit/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container } from 'native-base';
import { withAuth } from '../../providers/Auth';
import { withMyScheduleItem } from '../../providers/MyScheduleItem';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Main from '../MyScheduleCreate/Main';
import EmptyWrapper from '../MySchedule/EmptySchedule';
import IconCooking from '../../images/icon-cooking.png';

export class MyScheduleEditScene extends PureComponent {
  static navigationOptions = {
    title: 'Ubah Jadwal Masak',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation, route, setSchedule } = this.props;
    const { item } = route.params;

    if (!loggedIn) {
      navigation.navigate('Login');
    }

    if (item) {
      setSchedule(item);
    }
  }

  componentWillUnmount() {
    this.props.resetSchedule();
  }

  renderEmpty = () => (
    <Container>
      <Header title="Rubah Jadwal Masak" leftSettings={{ type: 'back' }} />
      <Content nospace clean>
        <Loader visible={this.props.manageLoading} />
        <EmptyWrapper>
          <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
          <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
            Jadwal tidak ditemukan
          </Paragraph>
        </EmptyWrapper>
      </Content>
    </Container>
  );

  render() {
    const { schedule } = this.props;
    return (
      <React.Fragment>
        {schedule && schedule.count() > 0 ? (
          <Main sceneTitle="Ubah Jadwal Masak" schedule={schedule} />
        ) : (
          this.renderEmpty()
        )}
      </React.Fragment>
    );
  }
}

MyScheduleEditScene.propTypes = {
  setSchedule: PropTypes.func,
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  route: PropTypes.object,
  schedule: PropTypes.object,
  manageLoading: PropTypes.bool,
  resetSchedule: PropTypes.func,
};

export default compose(
  withAuth,
  withMyScheduleItem,
)(MyScheduleEditScene);

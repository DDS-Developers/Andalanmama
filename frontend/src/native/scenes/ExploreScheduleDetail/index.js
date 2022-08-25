/**
 * scenes/ExploreSchedule/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, View, H2, Icon, Spinner } from 'native-base';

import { withAuth } from '../../providers/Auth';
import { withExploreSchedule } from '../../providers/ExploreSchedule';
import { withMySchedule } from '../../providers/MySchedule';
import AuthRoot from '../../containers/AuthRoot';

import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import Text from '../../components/Text';
import Header from '../../components/Header';
import ContentClear from '../../components/ContentClear';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import ButtonPrimary from '../../components/ButtonPrimary';
import IconCooking from '../../images/icon-cooking.png';
import List from './List';

export class ExploreScheduleDetailScene extends PureComponent {
  static navigationOptions = {
    title: 'Telusuri Jadwal Memasak',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: '-',
      title: 'Jadwal Masak Andalanku',
      showConfirm: false,
    };
  }

  componentDidMount() {
    const { loggedIn, navigation, route, setSchedule, checkScheduleDate } = this.props;
    const { item } = route.params;

    if (!loggedIn) {
      navigation.navigate('Login');
    }

    if (item) {
      setSchedule(item);

      const schedules = item.get('schedules');
      if (schedules && schedules.count()) {
        const schItem = schedules.get(0);
        const date = schItem.get('schedule_date');
        const title = schItem.get('title');
        this.setState({ date, title });
        checkScheduleDate(date);
      }
    }
  }

  componentWillUnmount() {
    this.props.resetSchedule();
  }

  addSchedule = (date, userId, schedule) => {
    const { addToMySchedules, haveSchedule } = this.props;

    if (haveSchedule) {
      this.setState({ showConfirm: true });
    } else {
      addToMySchedules(date, userId, schedule);
    }
  };

  renderEmpty = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        Jadwal masak tidak ditemukan
      </Paragraph>
    </View>
  );

  renderMain = () => {
    const { schedule, authData, checkDateLoading, navigation } = this.props;
    const { date, title } = this.state;

    const user = schedule.get('user');
    const schedules = schedule.get('schedules');
    const auth = authData.get('user');

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 15 }}>
          <View style={{ marginBottom: 30 }}>
            <H2 style={{ color: '#e83249', marginBottom: 25 }}>{title}</H2>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 12, color: '#000000', marginRight: 2 }}>By. </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile', { id: user.get('id') })}
                >
                  <Text style={{ fontSize: 12, color: '#e83249', textDecoration: 'underline' }}>
                    {user.get('username')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Icon
                  type="MaterialIcons"
                  name="event"
                  style={{ fontSize: 20, color: '#000000', marginRight: 10 }}
                />
                <Text style={{ fontSize: 12, color: '#000000' }}>{date}</Text>
              </View>
            </View>
          </View>
          <List items={schedules} />
          {checkDateLoading ? (
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <Spinner color="#888888" />
            </View>
          ) : (
            <React.Fragment>
              {auth && auth.get('id') !== user.get('id') ? (
                <View style={{ marginTop: 20 }}>
                  <ButtonPrimary
                    style={{ justifyContent: 'center', width: '100%' }}
                    onPress={() => this.addSchedule(date, user.get('id'), schedule)}
                  >
                    Tambahkan ke Jadwal Saya
                  </ButtonPrimary>
                </View>
              ) : null}
            </React.Fragment>
          )}
        </View>
      </ScrollView>
    );
  };

  renderConfirm = () => {
    const { showConfirm } = this.state;

    return (
      <Dialog
        visible={showConfirm}
        title="Gagal Menambahkan"
        message="Jadwal Masak bunda sudah Terisi di tanggal yang tertera, Hapus salah satu!"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showConfirm: false,
                });
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
    const { loading, schedule } = this.props;

    return (
      <AuthRoot>
        <Container>
          <Header title="Telusuri Jadwal Memasak" leftSettings={{ type: 'back' }} />
          <ContentClear>
            <Loader visible={loading} />
            {schedule ? this.renderMain() : this.renderEmpty()}
          </ContentClear>
          {this.renderConfirm()}
        </Container>
      </AuthRoot>
    );
  }
}

ExploreScheduleDetailScene.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  authData: PropTypes.object,
  loggedIn: PropTypes.bool,
  loading: PropTypes.bool,
  setSchedule: PropTypes.func,
  resetSchedule: PropTypes.func,
  addToMySchedules: PropTypes.func,
  checkScheduleDate: PropTypes.func,
  schedule: PropTypes.object,
  checkDateLoading: PropTypes.bool,
  haveSchedule: PropTypes.bool,
};

export default compose(
  withAuth,
  withMySchedule,
  withExploreSchedule,
)(ExploreScheduleDetailScene);

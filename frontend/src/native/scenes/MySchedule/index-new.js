/* eslint-disable indent */
/**
 * scenes/MySchedule/index.js
 *
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, Icon, View, Button, Text as TextNB } from 'native-base';
import { Dimensions, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

import { withTourGuide } from '../../providers/TourGuide';
import { withAuth } from '../../providers/Auth';
import { withMySchedule } from '../../providers/MySchedule';

import AuthRoot from '../../containers/AuthRoot';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ButtonText from '../../components/Dialog/Button';
import Dialog from '../../components/Dialog';
import Content from '../../components/Content';
import MenuWrapper from '../RecipeBookItems/MenuWrapper';
import NavWrapper from '../RecipeBookItems/NavWrapper';

import EmptySchedule from './EmptySchedule';
import ButtonCreateWrapper from './ButtonCreateWrapper';
import IconCreateWrapper from './IconCreateWrapper';
import ListSchedule from './ListSchedule';
import TitleSchedule from './TitleSchedule';
import InputTitle from './InputTitle';
import InputPublish from './InputPublish';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const MyScheduleScene = props => {
  const {
    loading,
    loggedIn,
    navigation,
    skipped,
    setStep,
    setVisible,
    allSchedule,
    loadMySchedules,
    deleteMySchedule,
    clearSchedules,
  } = props;

  const modalY = new Animated.Value(-(deviceHeight / 3) * 2);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const [deletedDate, setDeletedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const blurUnsubscribe = navigation.addListener('blur', () => {
      if (modalVisible) {
        changeModalVisible(false);
      }
    });

    const focusUnsubscribe = navigation.addListener('focus', () => {
      if (loggedIn) {
        checkSkipped();
        loadMySchedules();
      }
    });

    return function cleanup() {
      blurUnsubscribe();
      focusUnsubscribe();
      clearSchedules();
    };
  });

  /**
   * checkSkipped
   */
  const checkSkipped = async () => {
    const mySchSkipped = await AsyncStorage.getItem('ANDALAN_TOUR_GUIDE_MY_SCHEDULE');

    if (!skipped && !mySchSkipped) {
      setVisible(true);
      setStep(14);
    }
  };

  /**
   * changeModalVisible
   */
  const changeModalVisible = visible => {
    setModalVisible(visible);
    if (visible) {
      Animated.timing(modalY, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalY, {
        duration: 300,
        toValue: -(deviceHeight / 3) * 2,
        useNativeDriver: true,
      }).start();
    }
  };

  /**
   * renderList
   */
  const renderList = () => {
    if (allSchedule && allSchedule.count() > 0) {
      return (
        <Content style={{ flex: 1, paddingRight: 24 }}>
          {allSchedule.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View style={{ marginBottom: 40 }} key={`schedule-today-${index}`}>
              <TitleSchedule date={item.get('date')} />
              {item.get('schedules').count() > 0 ? (
                <View style={{ paddingTop: 15, backgroundColor: '#f7f7f7', elevation: 2 }}>
                  <View style={{ paddingHorizontal: 22 }}>
                    <InputTitle scheduleData={item} />
                    <ListSchedule
                      items={item.get('schedules')}
                      onDelete={(id, date) => {
                        setShowDeleteConfirm(true);
                        setDeletedId(id);
                        setDeletedDate(date);
                      }}
                    />
                  </View>
                  <InputPublish scheduleData={item} />
                </View>
              ) : (
                <Text style={{ textAlign: 'right', paddingBottom: 12 }}>
                  Tidak ada jadwal untuk tanggal ini
                </Text>
              )}
            </View>
          ))}
        </Content>
      );
    }
    return null;
  };

  /**
   * renderButtonCreate
   */
  const renderButtonCreate = () => (
    <ButtonCreateWrapper onPress={() => navigation.navigate('MyScheduleCreate')}>
      {!allSchedule || allSchedule.count() < 1 ? <Text>Buat Jadwal Masak</Text> : null}
      <IconCreateWrapper>
        <Icon style={{ color: '#ffffff' }} type="MaterialIcons" name="add" />
      </IconCreateWrapper>
    </ButtonCreateWrapper>
  );

  /**
   * renderDeleteConfirm
   */
  const renderDeleteConfirm = () => (
    <Dialog
      visible={showDeleteConfirm}
      title="Are You Sure?"
      message="Anda yakin ingin menghapus
      jadwal masak ini?"
      actions={
        <React.Fragment>
          <ButtonText onPress={() => setShowDeleteConfirm(false)}>Batal</ButtonText>
          <ButtonText
            onPress={() => {
              setShowDeleteConfirm(false);
              deleteMySchedule(deletedId, deletedDate);
            }}
          >
            Lanjutkan
          </ButtonText>
        </React.Fragment>
      }
    />
  );

  /**
   * renderEmpty
   */
  const renderEmpty = () => <EmptySchedule />;

  /**
   * rightIcons
   */
  // eslint-disable-next-line no-unused-vars
  const rightIcons = () => (
    <View style={{ flexDirection: 'row' }}>
      <Button
        transparent
        onPress={() => {
          changeModalVisible(!modalVisible);
        }}
      >
        <Icon type="MaterialIcons" name="event" style={{ color: '#E83249' }} />
      </Button>
    </View>
  );

  /**
   * modalCalendar
   */
  // eslint-disable-next-line no-unused-vars
  const modalCalendar = () => {
    const years = moment().year();
    const days = moment()
      .locale('id')
      .format('ddd, MMMM DD');
    return (
      <Animated.View style={[styles.modal, { transform: [{ translateY: modalY }] }]}>
        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
          <TextNB style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)' }}>{years}</TextNB>
          <TextNB style={{ fontSize: 24, color: 'rgba(0,0,0,1)' }}>{days}</TextNB>
        </View>
        <View style={{ backgroundColor: '#ffffff', borderRadius: 4 }}>
          <CalendarPicker
            width={deviceWidth - 40}
            onDateChange={date => console.warn(date)}
            previousIcon={<Icon type="MaterialIcons" name="keyboard-arrow-left" />}
            nextIcon={
              <Icon
                type="MaterialIcons"
                name="keyboard-arrow-right"
                style={{ textAlign: 'right' }}
              />
            }
            todayBackgroundColor="#F7941D"
            todayTextStyle={{ color: '#ffffff' }}
          />
        </View>
      </Animated.View>
    );
  };

  /**
   * renderMenu
   */
  const renderMenu = () => {
    const type = 'my_schedules';
    const filters = [
      {
        title: 'Jadwal Masak Saya',
        value: 'my_schedules',
        path: 'MySchedule',
      },
      {
        title: 'Telusuri Jadwal Masak',
        value: 'explore',
        path: 'ExploreSchedule',
      },
    ];

    let Component = <View />;

    return (
      <MenuWrapper>
        {filters.map(filter => {
          const settings = {
            active: false,
            first: filter.value === 'my_schedules',
            last: filter.value === 'explore',
          };
          if (type !== filter.value) {
            Component = (
              <TouchableOpacity
                first={filter.value === 'my_schedules'}
                last={filter.value === 'explore'}
                onPress={() => {
                  navigation.navigate(filter.path);
                }}
              />
            );
          } else {
            settings.active = true;
          }
          return (
            <NavWrapper key={`menu-filter-${filter.value}`} component={Component} {...settings}>
              <Text>{filter.title}</Text>
            </NavWrapper>
          );
        })}
      </MenuWrapper>
    );
  };

  return (
    <AuthRoot>
      <Container>
        {/* <Header title="My Schedule" ContentComponent={this.rightIcons()} /> */}
        <Header title="Jadwal Masak Saya" />
        {renderMenu()}
        <View style={{ flex: 1 }}>
          <Loader visible={loading} />
          <View style={{ flex: 1, zIndex: 1 }}>
            {allSchedule && allSchedule.count() > 0 ? renderList() : renderEmpty()}
          </View>
        </View>
        {!loading ? renderButtonCreate() : null}
        {renderDeleteConfirm()}
      </Container>
    </AuthRoot>
  );
};

MyScheduleScene.propTypes = {
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
  loadMySchedules: PropTypes.func,
  deleteMySchedule: PropTypes.func,
  loading: PropTypes.bool,
  allSchedule: PropTypes.object,
  clearSchedules: PropTypes.func,
  skipped: PropTypes.bool,
  setStep: PropTypes.func,
  setVisible: PropTypes.func,
};

const styles = StyleSheet.create({
  modal: {
    width: deviceWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#D5D5D5',
    justifyContent: 'center',
    zIndex: 2,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
});

const NavigationWrapper = props => {
  const navigation = useNavigation();

  return <MyScheduleScene {...props} navigation={navigation} />;
};

export default compose(
  withAuth,
  withMySchedule,
  withTourGuide,
)(NavigationWrapper);

/**
 * scenes/Settings/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Card, CardItem, View } from 'native-base';

import { withSetting } from '../../providers/Setting';
import Content from '../../components/Content';
import SwitchButton from '../../components/SwitchButton';
import Header from '../../components/Header';

export class SettingsScene extends PureComponent {
  static navigationOptions = {
    title: 'Pengaturan',
    header: null,
  };

  componentDidMount() {
    this.props.loadSettings();
  }

  changeButtonColor() {
    if (this.state.buttonColor) {
      this.setState({ buttonColor: 'green' });
    } else {
      this.setState({ buttonColor: 'red' });
    }
  }

  render() {
    const { settingNotification, settingNewsletter } = this.props;

    return (
      <Container>
        <Header
          title="Pengaturan"
          leftSettings={{ type: 'back' }}
          rightSettings={{
            label: 'Simpan',
            handler: () => {
              this.props.updateSettings();
            },
          }}
        />
        <Content>
          <View>
            <Card style={{ elevation: 0, borderRadius: 4, overflow: 'hidden' }}>
              <CardItem
                bordered
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                <Text>Pemberitahuan</Text>
                <SwitchButton
                  value={settingNotification}
                  onValueChange={value => this.props.changeSettingNotification(value)}
                />
              </CardItem>
              <CardItem
                bordered
                style={{
                  justifyContent: 'space-between',
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                <Text>Berita</Text>
                <SwitchButton
                  value={settingNewsletter}
                  onValueChange={value => this.props.changeSettingNewsletter(value)}
                />
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

SettingsScene.propTypes = {
  loadSettings: PropTypes.func,
  updateSettings: PropTypes.func,
  changeSettingNotification: PropTypes.func,
  changeSettingNewsletter: PropTypes.func,
  settingNotification: PropTypes.bool,
  settingNewsletter: PropTypes.bool,
};

export default withSetting(SettingsScene);

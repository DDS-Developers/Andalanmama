import React, { PureComponent } from 'react';
import {
  Container,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  ActionSheet,
  Button,
  Icon,
} from 'native-base';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { withMyMessage } from '../../providers/MyMessage';
import AuthRoot from '../../containers/AuthRoot';
import Content from '../../components/Content';
import Header from '../../components/Header';

const BUTTONS = ['Hapus', 'Batal'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

// eslint-disable-next-line react/prefer-stateless-function
export class MyMessageDetail extends PureComponent {
  static navigationOptions = {
    title: 'Detail Pesan',
    header: null,
  };

  componentDidMount() {
    const { route } = this.props;
    const { message } = route.params;

    if (message) {
      this.props.setMessage(message);
    }
  }

  renderContent = () => {
    const { message } = this.props;
    return (
      <Card style={{ elevation: 0, borderRadius: 8, padding: 20, marginBottom: 20 }}>
        <CardItem
          style={{
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
          }}
        >
          <Left>
            <Thumbnail
              style={{ width: 30, height: 30, borderRadius: 30, marginRight: 5 }}
              source={{ uri: 'http://lorempixel.com/100/100/food/1' }}
            />
            <Body>
              <Text style={{ fontSize: 16 }}>{message.get('title')}</Text>
            </Body>
          </Left>
        </CardItem>
        <View style={{ flex: 1, marginTop: 20, marginBottom: 30 }}>
          <Text style={{ fontSize: 13 }}>{message.get('content')}</Text>
        </View>
        <Button
          small
          transparent
          iconRight
          style={{ alignSelf: 'flex-end' }}
          onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
              },
              buttonIndex => {
                if (buttonIndex === 0) {
                  this.props.doDeleteMessage(message.get('id'));
                }
              },
            )
          }
        >
          <Text style={{ color: 'rgba(0, 0,0, 0.5)', fontSize: 11, marginRight: 5 }}>Hapus</Text>
          <Icon
            style={{ color: 'rgba(0, 0,0, 0.5)', marginRight: 0 }}
            type="MaterialIcons"
            name="delete"
          />
        </Button>
      </Card>
    );
  };

  render() {
    const { message } = this.props;

    return (
      <AuthRoot>
        <Container>
          <Header title="Pesan" leftSettings={{ type: 'back' }} />
          <Content>{message ? this.renderContent() : null}</Content>
        </Container>
      </AuthRoot>
    );
  }
}

MyMessageDetail.propTypes = {
  message: PropTypes.object,
  setMessage: PropTypes.func,
  doDeleteMessage: PropTypes.func,
  route: PropTypes.object,
};

export default withMyMessage(MyMessageDetail);

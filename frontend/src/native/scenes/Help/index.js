/* eslint-disable react/no-array-index-key */
/**
 * scenes/Help/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container, Card } from 'native-base';
import Content from '../../components/Content';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';

const menus = [
  {
    path: 'PrivacyPolicy',
    label: 'Kebijakan Privasi',
    type: 'MaterialIcons',
    icon: 'storage',
    auth: false,
  },
  {
    path: 'Terms',
    label: 'Syarat & Ketentuan',
    icon: 'format-quote',
    auth: false,
  },
  {
    path: 'Faq',
    label: 'Pertanyaan Umum',
    type: 'MaterialIcons',
    icon: 'message',
    auth: false,
  },
  // {
  //   path: 'GuideBook',
  //   label: 'Buku Panduan',
  //   type: 'MaterialIcons',
  //   icon: 'message',
  //   auth: false,
  // },
  {
    path: 'Tutorial',
    label: 'Buku Panduan',
    type: 'MaterialIcons',
    icon: 'book',
    auth: false,
  },
];
export class HelpScene extends PureComponent {
  static navigationOptions = {
    title: 'Bantuan',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="Bantuan" leftSettings={{ type: 'back' }} />
        <Content>
          {menus.map((menu, index) => (
            <Card key={`menu-${index}`} style={{ elevation: 0 }}>
              <MenuItem
                key={menu.path}
                label={menu.label}
                icon={menu.icon}
                target={menu.path}
                type={menu.type}
              />
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

export default HelpScene;

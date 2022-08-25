/**
 * scenes/Faq/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container, H3 } from 'native-base';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Header from '../../components/Header';
import Wrapper from './Wrapper';

export class FaqScene extends PureComponent {
  static navigationOptions = {
    title: 'Faq',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="Faq" leftSettings={{ type: 'back' }} />
        <Content>
          <Wrapper>
            <H3
              style={{
                textAlign: 'center',
                borderBottomWidth: 1,
                borderColor: '#000000',
                paddingBottom: 20,
                marginBottom: 30,
              }}
            >
              FAQ
            </H3>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo est, venenatis
              vel lacus in, faucibus interdum arcu. Aliquam vitae porta dui. Vestibulum vitae
              pharetra diam. Proin quis arcu at turpis egestas finibus. Fusce at arcu vitae erat
              auctor tincidunt. Sed vel ultrices eros. Vestibulum vestibulum auctor urna, eu
              ultrices orci convallis vitae. Mauris id mauris nec sapien mollis ultricies. Quisque
              arcu orci, suscipit ac hendrerit vitae, iaculis nec ligula. Praesent at ante felis.
              Nulla eget orci at diam luctus hendrerit. Suspendisse luctus ipsum non facilisis
              tincidunt. Proin lacinia elit non enim bibendum, ac viverra augue viverra. Sed mi
              tellus, posuere efficitur turpis a, posuere pharetra est. Etiam non suscipit lorem,
              sed iaculis nisl. Praesent nibh lectus, mollis sed lacus nec, posuere commodo tortor.
              {'\n'} {'\n'}
              Nunc porta risus eleifend, porttitor lorem eget, suscipit metus. Ut nunc nulla,
              bibendum id massa in, malesuada rutrum leo. Phasellus dapibus laoreet sem sed
              placerat. Praesent in ex commodo, pellentesque justo vel, condimentum erat. Etiam
              elementum ullamcorper finibus. Mauris a mattis mauris. Fusce aliquet erat id arcu
              fringilla tristique. Fusce vestibulum, nisi quis viverra vulputate, leo tellus semper
              erat, a imperdiet nulla sem eget enim. Mauris consequat nisi non egestas placerat. In
              in risus velit. Aenean et euismod libero. Praesent blandit laoreet molestie.
              Vestibulum volutpat nisl porta felis vehicula rhoncus eget at nibh.
              {'\n'} {'\n'}
              Morbi euismod metus a neque porta imperdiet. Sed molestie risus dui, non vestibulum
              turpis tincidunt a. Praesent quis felis id neque efficitur auctor. Maecenas ornare
              molestie lorem. Sed dui nisi, iaculis sit amet efficitur eget, consequat id mi. Ut et
              hendrerit mi. Duis at urna id diam congue euismod sit amet volutpat odio. Morbi vitae
              elit id lorem tempus dapibus et eu est. Fusce velit urna, aliquam in est sit amet,
              suscipit lacinia ante.
            </Paragraph>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

export default FaqScene;

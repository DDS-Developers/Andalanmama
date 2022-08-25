/**
 * components/Dialog.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View } from 'native-base';
import Paragraph from '../../components/Paragraph';
import { makeSelectDebugContent } from '../../store/App/selectors';

export class DialogDebugger extends PureComponent {
  render() {
    const { debugContent } = this.props;
    if (debugContent && debugContent.count() > 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(38, 38, 38, 0.7)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            padding: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              padding: 20,
            }}
          >
            {debugContent.map((content, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Paragraph key={`content-${key}`}>{content}</Paragraph>
            ))}
          </View>
        </View>
      );
    }
    return null;
  }
}

DialogDebugger.propTypes = {
  debugContent: PropTypes.object,
};

export function mapDispatchToProps() {
  return {};
}
const mapStateToProps = createStructuredSelector({
  debugContent: makeSelectDebugContent(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogDebugger);

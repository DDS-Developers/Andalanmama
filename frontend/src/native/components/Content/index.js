/**
 * components/Content/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import { withApp } from '../../providers/App';
import Wrapper from './Wrapper';
import NoSpaceWrapper from './NoSpaceWrapper';

const Content = props => {
  const { children, nospace, refreshControl, scrollProps, setScrollViewRef, ...others } = props;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ zIndex: -1 }}
      refreshControl={refreshControl}
      ref={element => setScrollViewRef(element)}
      {...scrollProps}
    >
      {nospace ? (
        <NoSpaceWrapper {...others}>{children}</NoSpaceWrapper>
      ) : (
        <Wrapper {...others}>{children}</Wrapper>
      )}
    </ScrollView>
  );
};

Content.propTypes = {
  refreshControl: PropTypes.node,
  children: PropTypes.node,
  nospace: PropTypes.bool,
  clean: PropTypes.bool,
  scrollProps: PropTypes.object,
  setScrollViewRef: PropTypes.func,
};

export default withApp(Content);

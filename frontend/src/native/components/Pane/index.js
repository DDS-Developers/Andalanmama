/**
 * components/Pane/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const Pane = props => {
  const {
    center,
    start,
    end,
    row,
    column,
    direction,
    align,
    wrap,
    justify,
    children,
    ...others
  } = props;

  let flexDirection = 'row';
  let alignItems = 'stretch';
  let justifyContent = 'flex-start';
  let flexWrap = 'nowrap';

  if (direction) {
    flexDirection = direction;
  } else if (row) {
    flexDirection = 'row';
  } else if (column) {
    flexDirection = 'column';
  }

  if (align) {
    alignItems = align;
  } else if (center) {
    alignItems = 'center';
  } else if (start) {
    alignItems = 'flex-start';
  } else if (end) {
    alignItems = 'flex-end';
  }

  if (justify) {
    justifyContent = justify;
  }

  if (wrap) {
    flexWrap = wrap;
  }

  return (
    <Wrapper
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      {...others}
    >
      {children}
    </Wrapper>
  );
};

Pane.propTypes = {
  center: PropTypes.bool,
  start: PropTypes.bool,
  end: PropTypes.bool,
  row: PropTypes.bool,
  column: PropTypes.bool,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  direction: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
    'initial',
    'inherit',
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', 'initial', 'inherit']),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]),
};

export default Pane;

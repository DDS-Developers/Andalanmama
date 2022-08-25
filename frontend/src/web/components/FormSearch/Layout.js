import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Button from '../Button';
import Input from '../Input';

const FormSearch = props => {
  const { onSubmit, onChangeKeyword, ...others } = props;

  return (
    <Wrapper {...others}>
      <form
        className="_inner"
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit();
        }}
        method="post"
        action=""
      >
        <Input
          type="text"
          name="query"
          placeholder="Temukan Berbagai Resep Andalan di sini..."
          borderRadius="5px 0 0 5px"
          value={props.query}
          onChange={evt => onChangeKeyword(evt.target.value)}
        />
        <Button type="submit" borderRadius="0 5px 5px 0">
          Cari
        </Button>
      </form>
    </Wrapper>
  );
};

FormSearch.propTypes = {
  onSubmit: PropTypes.func,
  onChangeKeyword: PropTypes.func,
  query: PropTypes.string,
};

export default FormSearch;

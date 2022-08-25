/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

class FormSearch extends React.Component {
  state = {
    keyword: '',
  };

  doChangeKeyword = keyword => {
    this.setState({
      keyword,
    });
  };

  doSearch = () => {
    // console.log('onSearch');
    // console.log(this.state.keyword);
  };

  render() {
    const { Layout } = this.props;

    return <Layout onSubmit={this.doSearch} onChangeKeyword={this.doChangeKeyword} />;
  }
}

FormSearch.propTypes = {
  Layout: PropTypes.func,
};

export default FormSearch;

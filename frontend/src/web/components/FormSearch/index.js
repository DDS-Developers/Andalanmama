import React from 'react';
import FormContainer from '../../../containers/FormSearch';
import Layout from './Layout';

// eslint-disable-next-line react/prefer-stateless-function
class FormSearch extends React.Component {
  render() {
    return <FormContainer Layout={Layout} />;
  }
}

export default FormSearch;

/**
 * providers/Form/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  setFormData,
  setFormFields,
  changeFormData,
  changeInputError,
  setInputErrors,
  setInputErrorCount,
  setValidationSettings,
  checkInputError,
  checkInputErrors,
  clearInputErrors,
  resetFormData,
  resetData,
  setFormMessage,
} from '../../store/Form/actions';
import {
  makeSelectFormData,
  makeSelectFormFields,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
  makeSelectFormMessage,
} from '../../store/Form/selectors';

export const FormProvider = () => WrappedComponent => {
  class Form extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Form.propTypes = {
    formData: PropTypes.object,
    formFields: PropTypes.object,
    formMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    inputErrors: PropTypes.object,
    inputErrorCount: PropTypes.number,
    setFormData: PropTypes.func,
    setFormFields: PropTypes.func,
    setFormMessage: PropTypes.func,
    changeFormData: PropTypes.func,
    setInputErrors: PropTypes.func,
    setInputError: PropTypes.func,
    setInputErrorCount: PropTypes.func,
    changeInputError: PropTypes.func,
    checkInputError: PropTypes.func,
    checkInputErrors: PropTypes.func,
    setValidationSettings: PropTypes.func,
    clearInputErrors: PropTypes.func,
    resetFormData: PropTypes.func,
    resetData: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    formData: makeSelectFormData(),
    formFields: makeSelectFormFields(),
    formMessage: makeSelectFormMessage(),
    inputErrors: makeSelectInputErrors(),
    inputErrorCount: makeSelectInputErrorCount(),
  });

  const FormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Form);

  return hoistNonReactStatics(FormConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    setFormData: data => dispatch(setFormData(data)),
    setFormFields: fields => dispatch(setFormFields(fields)),
    setFormMessage: message => dispatch(setFormMessage(message)),
    changeFormData: (name, value) => dispatch(changeFormData(name, value)),
    setInputErrors: errors => dispatch(setInputErrors(errors)),
    setInputErrorCount: count => dispatch(setInputErrorCount(count)),
    changeInputError: (name, error) => dispatch(changeInputError(name, error)),
    checkInputError: name => dispatch(checkInputError(name)),
    checkInputErrors: () => dispatch(checkInputErrors()),
    setValidationSettings: settings => dispatch(setValidationSettings(settings)),
    clearInputErrors: () => dispatch(clearInputErrors()),
    resetFormData: () => dispatch(resetFormData()),
    resetData: () => dispatch(resetData()),
  };
}

export const withForm = FormProvider();

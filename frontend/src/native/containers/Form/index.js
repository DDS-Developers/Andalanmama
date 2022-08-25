/**
 * containers/Form/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, View } from 'native-base';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import { FormProvider } from '../../providers/Form';
// import Debugger from '../../helpers/Debugger';

export const withForm = FormProvider();

export class FormContainer extends PureComponent {
  componentDidMount() {
    const { validationSettings, fields } = this.props;
    this.props.setFormFields(fields);
    this.props.setValidationSettings(validationSettings);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const {
      formMessage,
      hideMessage,
      inputErrorCount,
      children,
      formStyles,
      viewStyles,
    } = this.props;
    let message = null;
    if (!hideMessage) {
      message = formMessage;
      if ((!formMessage || formMessage === '') && inputErrorCount > 1) {
        message = 'Data is incomplete or incorrect.';
      }
    }

    return (
      <Form {...formStyles}>
        {message ? <FieldErrorInfo center top message={message} /> : null}
        <View {...viewStyles}>{children}</View>
      </Form>
    );
  }
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  fields: PropTypes.array.isRequired,
  validationSettings: PropTypes.object.isRequired,
  formMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hideMessage: PropTypes.bool,
  inputErrorCount: PropTypes.number,
  resetData: PropTypes.func,
  setFormFields: PropTypes.func,
  setValidationSettings: PropTypes.func,
  formStyles: PropTypes.object,
  viewStyles: PropTypes.object,
};

export default withForm(FormContainer);

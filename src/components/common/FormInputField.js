import React, { PropTypes, Component } from 'react';
import { Col, FormGroup, ControlLabel } from 'react-bootstrap'
import { Field } from 'redux-form'

class FormInputField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    labelProps: PropTypes.object,
    inputColProps: PropTypes.object,
    inputProps: PropTypes.object
  };

  render() {
    let { name, label, placeholder, labelProps, inputColProps, inputProps } = this.props;
    placeholder = placeholder || label;

    return (
      <FormGroup controlId={name}>
        <Col componentClass={ControlLabel} {...(labelProps || {})} >
          {label}
        </Col>
        <Col {...(inputColProps || {})}>
          <Field className="form-control" id={name} name={name} {...(inputProps || {})}
            placeholder={placeholder}>
            {this.props.children}
          </Field>
        </Col>
      </FormGroup>
    );
  }
}

export default FormInputField
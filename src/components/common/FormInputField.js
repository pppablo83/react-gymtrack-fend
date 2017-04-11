import React, { PropTypes, Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Field } from 'redux-form';

function DecoratorGenericField ({ inputProps, placeholder, type, label, children, meta: { touched, error, warning } }) {

  const validationState = touched && error ? "error" : "success";

  return (
    <FormGroup controlId={inputProps.name} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      {children}
      {validationState === "error" && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  )
}

const renderInputTextField = (props) => {
  return (
    <DecoratorGenericField {...props}>
      <FormControl {...props.input} placeholder={props.placeholder}/>
    </DecoratorGenericField>
  )
}

const renderSelectField = (props) => {
  return (
    <DecoratorGenericField {...props}>
      <FormControl {...props.input} componentClass="select" placeholder={props.placeholder}>
        props.inputProps.options
        {props.inputProps.options.map(option => {
          return <option value={option.value} key={option.value}>{option.text}</option>
        })}
      </FormControl>
    </DecoratorGenericField>
  )
}


class FormInputField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object
  };

  renderField(type) {
    switch(type) {
      case "text" :
        return renderInputTextField;
      case "select" :
        return renderSelectField;  
      default :
        return renderInputTextField;
    }
  }

  render() {
    return (
          <Field name={this.props.name} {...this.props} component={this.renderField(this.props.inputProps.type)}/>
    );
  }
}

export default FormInputField
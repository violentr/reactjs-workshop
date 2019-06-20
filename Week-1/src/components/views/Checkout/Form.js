import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'

const renderField = ({input, label, type, meta: {touched, error, warning} }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>)
}

const validate = (values) => {
  let errors = {}

  if (!values) {
    return errors = {
      firstName: 'required',
      lastName: 'required',
      email: 'required'
    }
  }

  if (!values.firstName) {
    errors.firstName = '* required'
  }

  if (!values.lastName) {
    errors.lastName = '* required'
  }

  if (!values.email) {
    errors.email = '* required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

let CheckoutForm = (props) => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field
        name="email"
        type="text"
        component={renderField}
        label="Email"
      />
      {props.dirty && <button type="submit">Send</button> }
    </form>
  )
}

CheckoutForm = reduxForm({
  // a unique name for the form
  form: 'checkout',
  validate
})(CheckoutForm)

export default connect()(CheckoutForm)

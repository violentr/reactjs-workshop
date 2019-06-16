import React, {Component, Fragment} from 'react'
import {mapValues} from 'lodash/object'

class ContactPage  extends Component {

  constructor(props) {
    super(props);
    this.form = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    let values = mapValues(this.form, 'value')
    let form = Object.assign({}, this.form, values)
    this.setState(form)

    alert('A form was submitted: ' + JSON.stringify(form))
  }

  generateRef(fieldName){
    return (input) =>  { this.form[fieldName] = input }
  }

  render() {

    console.log("state", this.form)
    return (
      <Fragment>
        <h1> Contact Us Form </h1>
        <form onSubmit={this.handleSubmit}>
          <Text fieldName="name" label="Name" fieldRef={this.generateRef('name')} />
          <Text fieldName="email" label="Email" fieldRef={this.generateRef('email')} />
          <TextArea fieldName="message" label="Message" fieldRef={this.generateRef('message')} />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ContactPage

export class Text extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {fieldName, label, fieldRef} = this.props
    return (
      <div>
        <label htmlFor={fieldName} >{label}: </label>
        <input type="text" id={fieldName} name={fieldName} ref={fieldRef} />
      </div>
    )
  }
}

export class TextArea extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {fieldName, label, fieldRef} = this.props
    return (
      <div>
        <label htmlFor={fieldName}>{label}: </label>
        <textarea id={fieldName} name={fieldName} ref={fieldRef} />
      </div>
    )
  }
}

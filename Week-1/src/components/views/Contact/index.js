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
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" ref={this.generateRef('name')} />
          </div>
          <div>
            <label htmlFor="name">Email :</label>
            <input type="text" name="email" ref={this.generateRef('email')} />
          </div>
          <div>
            <label htmlFor="message">Message : </label>
            <textarea name="message" ref={this.generateRef('message')} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ContactPage

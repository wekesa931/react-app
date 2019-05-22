import React from 'react';
import axios from 'axios';
import {  signUp } from '../actions';
import { Form, Button } from 'reactstrap';
import AuthForm from '../Forms/auth_form';

export default class Auths extends React.Component {
  state = {
    formData:
        {
        firstname: {
          value: '',
          type: 'text',
          element:'input',
          placeholder: 'firstname',
          label: 'First Name'
        },
        lastname: {
          value: '',
          type: 'text',
          element:'input',
          placeholder: 'lastname',
          label: 'Last Name'
        },
        othername: {
          value: '',
          type: 'text',
          element:'input',
          placeholder: 'othername',
          label: 'Other Name'
        },
        username: {
          value: '',
          type: 'text',
          element:'input',
          placeholder: 'username',
          label: 'Username'
        },
        email: {
          value: '',
          type: 'email',
          element:'input',
          placeholder: 'email',
          label: 'Email'
        },
        phoneNumber: {
          value: '',
          type: 'number',
          element:'input',
          placeholder: 'phoneNumber',
          label: 'Phone Name'
        },
        password: {
          value: '',
          type: 'password',
          element:'input',
          placeholder: 'password',
          label: 'Password'
        },
      }
  }

  handleChange = newState => {
    this.setState({
      formData: newState
    })
  }

  handleSubmit = event => {
  event.preventDefault()
      let dataToSubmit = {}
      for(let item in this.state.formData){
          dataToSubmit[item] = this.state.formData[item].value
      }
    
    signUp(dataToSubmit)
    axios.post(`https://questionerapplication.herokuapp.com/api/v2/user/auth/signup`, dataToSubmit)
      .then(res => {
        console.log(res);
        this.props.history.push('/auth/signin')
      })
      .catch(
          err=>{
            console.log(err);
            console.log(err.message);
          }
      )
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <AuthForm formFields={this.state.formData}
                  change={(newState)=>this.handleChange(newState)}/>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}
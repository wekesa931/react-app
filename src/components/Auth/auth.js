import React from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '././style/auth.css';
import {  signUp } from '../actions';
import { Form, Button } from 'reactstrap';
import AuthForm from '../../Forms/auth_form';

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
        }
      }
  }

  handleChange = newState => {
    this.setState({
      formData: newState
    })
  }

  handleSubmit = event => {
    console.log('event')
  event.preventDefault()
      let dataToSubmit = {}
      for(let item in this.state.formData){
          dataToSubmit[item] = this.state.formData[item].value
      }
    
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
<<<<<<< HEAD:src/components/auth.js
      <div className="bill">
=======
      <div className="form-info">
>>>>>>> added tests:src/components/Auth/auth.js
        <Form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
          <FormGroup>
            <Label for="firstname">Firstname</Label>
            <Input type="text" name="firstname" value={firstname} placeholder="First name" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last name</Label>
            <Input type="text" name="lastname" value={lastname} placeholder="Last name" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="othername">Other name</Label>
            <Input type="text" name="othername" value={othername} placeholder="Other name" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="username">User name</Label>
            <Input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input type="text" name="phoneNumber" value={phoneNumber} placeholder="Phone number" onChange={this.handleChange}/><br/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}/>
          </FormGroup>
          <Button color="primary" type="submit">Sign Up</Button>
          <Button color="secondary" >Cancel</Button>
          <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
=======
          <AuthForm formFields={this.state.formData}
                  change={(newState)=>this.handleChange(newState)}/>
          <Button type="submit">Submit</Button>
>>>>>>> added reducers
        </Form>
      </div>
    )
  }
}
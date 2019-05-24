import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  meetupData, requestLogic } from '../../actions';
import { Container } from 'reactstrap';

export class Home extends Component {

  componentWillMount(){
    let url = `https://questioner2.herokuapp.com/api/v2/meetups/upcoming`;
    requestLogic(url)
        .then(data => this.props.meetupData(data))
  }
  renderMeetup = (mtp)=>(
    mtp ? mtp.map((item)=>(
      <div key={item.id}>
        <h5>{item.title}</h5>
        <div>{item.created_on}</div>
        <p>{item.details}</p>
        <hr/>
      </div>
    )):null
  )
    
  
  render() {
    console.log(this.props.data)
    return (
      <Container>
        {this.renderMeetup(this.props.data)}
      </Container>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
      data: state.meetup.meetup
  }
}
export default connect(mapStateToProps, { meetupData })(Home);



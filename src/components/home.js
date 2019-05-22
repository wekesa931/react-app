import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  meetupData, loginLogic } from '../actions';
import { Container } from 'reactstrap';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
  }

  componentWillMount(){
    let obj = '';
    let url = `https://questioner2.herokuapp.com/api/v2/meetups/upcoming`;
    loginLogic(obj,url)
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

// created_on: "2019-02-20"
// creator: 1
// details: "Yet another test meetup. Hope it works too."
// happening_on: "2019-02-27"
// id: 2
// image: "https://ipsum-media.netlify.com/img/05.jpg"
// location: "Some venue somewhere"
// tags: "new, test"
// title: "Another test meetup"
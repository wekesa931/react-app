import instance from '../helpers/helpers';

export function requestLogic(url) {
    return instance.get(url)
    .then(response => {
        return response.data
    })
} 

export function meetupData(data){
    const meetupItems = data.data;
    return{
      type:'MEETUP_LIST',
      payload: meetupItems
    }
  }
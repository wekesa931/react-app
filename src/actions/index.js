import instance from '../helpers/helpers';

export function loginLogic(obj,url) {
    return instance.get(url, obj)
    .then(response => {
        return response.data
    })
}  
export function logIn(data){
    const admin = data.isadmin
    return {
        type:'LOGIN_LIST',
        payload:[
            {id: 1,name: data.token},
            {id: 2,name: `${admin}`}
        ]
    }
}

export function signUp(data){
    return {
        type:'SIGNUP_LIST',
        payload:[
            {   
                firstname: data.firstname,
                lastname: data.lastname,
                othername: data.othername,
                username: data.username,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password
            }
        ]
    }
}

export function meetupData(data){
    const meetupItems = data.data;
    return{
      type:'MEETUP_LIST',
      payload: meetupItems
    }
  }
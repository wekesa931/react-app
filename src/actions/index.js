import axios from 'axios';

export function movieslist(){
    return{
      type:'MOVIES_LIST',
      payload:[
        {id: 1,name: 'pablo escoba'},
        {id: 2,name: 'yuan majung'},
        {id: 3,name: 'Riat madeng'}
      ]
    }
  }


export function loginLogic() {
    let obj = {username: "martinto", password: "Tintinabu@12"}
    let res = ''
    return axios.post(`https://questionerapplication.herokuapp.com/api/v2/user/auth/login`, obj)
    .then(response => {
        // console.log(response.data.token)
        return response.data.token
    })
}  
export function logIn(token){

    return {
        type:'LOGIN_LIST',
        payload:[
            {id: 1,name: token},
            {id: 2,name: 'res'}
        ]
    }
    
}
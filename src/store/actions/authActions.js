import Axios from 'axios'
import jwtDecode from 'jwt-decode'

import * as Types from './types'

export const signup = (user , history) =>  dispatch => {
    Axios.post('http://localhost:4000/user/signup' , user)
    .then(res => {
        dispatch({
            type: Types.USER_ERROR,
            payload: {
                error: {}
            }
        })
        console.log(res);
        history.push('/login') //redirect to login page
    })
    .catch(error => {
        dispatch({
            type: Types.USER_ERROR , 
            payload: {
                error : error.response.data

        } })
    })

    }

    export const login = (user , history)=> dispatch => {

        Axios.post('http://localhost:4000/user/login',user)
        .then(res => {

            let token = res.data.token
            localStorage.setItem('auth_token' , token)
            let decode = jwtDecode(token)
          //  console.log(decode);

          dispatch({
              type: Types.SET_USER,
              payload: {
                  user: decode
              }
          })
          history.push('/home')

            
            //decode our token
            //save our token to local storage
            //set Auth Header
            //Dispath SET_USER
        })
        .catch(error => {
            console.log(error.response.data);
            dispatch({
                type: Types.USER_ERROR ,
                payload: {
                    error: error.response.data
                }
            })

        })
     
    }

import Axios from 'axios'

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
        .then(data => {
            console.log(data);
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

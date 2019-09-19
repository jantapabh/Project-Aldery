import axios from 'axios'
import {urlSheet1,urlSheet2,urlSheet3,urlSheet4,urlpost} from '../config'

 async function getSheet1(token,col) {

    const request = await axios.get(`${urlSheet1}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }

        })

    return request.data.values

}

async function getSheet2(token,col) {

    const request = await axios.get(`${urlSheet2}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

}

async function getSheet3(token,col) {

    const request = await axios.get(`${urlSheet3}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

}

async function getSheet4(token,col) {

    const request = await axios.get(`${urlSheet4}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

}

async function postSheetValues() {

    const request = await axios.post(`${urlpost}`,
        {
            headers: {
                Authorization: "Bearer 4/qQGd-JEj1hK6bmd0w0ESGCh7y-qrQNS4-pEwPb7nt-H3aPUhcUmA0FQx1cNs1GapRQ_wePGf4e6eXWGVTuhgY6E",
                Content_Type: "application/x-www-form-urlencoded",
                User_Agent:"google-oauth-playground",
                Content_length:"208",
                Host: "www.googleapis.com"
            }
        })

    return request

}

export default{
    getSheet1,
    getSheet2,
    getSheet3,
    getSheet4,
    postSheetValues

}
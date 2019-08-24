import axios from 'axios'
import {url,oauth,urlpost} from '../config'

 async function getSheetValues(token,col) {

    const request = await axios.get(`${url}${col}`,
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
    getSheetValues,
    postSheetValues

}
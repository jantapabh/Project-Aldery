import axios from 'axios'
import {urlpost,urlSheet2,urlSheetMain} from '../config'

async function getSheet2(token,col) {

    const request = await axios.get(`${urlSheet2}${col}`,
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
                Authorization: "Bearer 4/wQFG_KPyZzIQJOuhfcfkGoIAVV7vhAUM6Fn_diJ5ha46TUI2tNWVU-IoYcvUWm6mEw39RGk_QycAPWWpxRTETdc",
                Content_Type: "application/x-www-form-urlencoded",
                User_Agent:"google-oauth-playground",
                Content_length:"320",
                Host: "www.googleapis.com"
            }
        })

    return request

}

async function getSheet(token,col) {

    const request = await axios.get(`${urlSheetMain}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

    

}

export default{
    postSheetValues,
    getSheet2,
    getSheet
}
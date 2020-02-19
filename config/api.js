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
                Authorization: "Bearer 4/wgEQ6fQYE6MR-DWoBCboQV2KrEcYzSF3oB4tHkAD4dX0CJecMuPHFF2vZc9jkgjW8h-M6Fi0p1hgXzoUSehFkQs",
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
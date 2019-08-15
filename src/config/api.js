import axios from 'axios'
import {url,oauth} from '../config'

export default async function getSheetValues(col) {

    const request = await axios.get(`${url}${col}`,
        {
            headers: {
                Authorization: `${oauth}`
            }
        })

    return request.data.values

}
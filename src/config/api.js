import axios from 'axios'

export default async function getSheetValues() {

    const request = await axios.get('',
        {
            headers: {
                Authorization: ""
            }
        })

    return request.data.values

}
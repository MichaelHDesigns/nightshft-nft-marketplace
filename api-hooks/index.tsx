import axios from 'axios'

import { getCurrentEthPrice } from 'config'

export const fetchEthPrice = async () => {
    try {
        return (await axios.get(getCurrentEthPrice)).data
    } catch(err) {
        throw { message: err.response.data }
    }
}
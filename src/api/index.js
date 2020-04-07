import axios from 'axios'

// const url = 'https://api.covid19api.com'
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${url}`)

    return data

  } catch (error) {

  }
}
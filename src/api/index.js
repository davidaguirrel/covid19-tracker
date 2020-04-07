import axios from 'axios'

// const url = 'https://api.covid19api.com'
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${url}`)

    return data

  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map((item) => ({
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate
    }))

    return modifiedData

  } catch (error) {
    console.log(error)
  }
}
export const fetchCountries= async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)

    const modifiedData = data.countries.map((country) => ({
      name: country.name
    }))

    return modifiedData

  } catch (error) {
    console.log(error)
  }
}
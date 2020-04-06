import axios from 'axios'

const url = 'https://api.covid19api.com'

export const fetchData = async () => {
  try {
    const { data:
      {
        Global:
        {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered
        },
        Date
      }
    } = await axios.get(`${url}/summary`)
    // const { data } = await axios.get(`${url}/summary`)
    // return data

    return { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date }

  } catch (error) {

  }
}
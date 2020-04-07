import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'

import styles from './Chart.module.css'

export default class Chart extends React.Component {
  state = {
    dailyData: []
  }

  async componentDidMount() {
    const data = await fetchDailyData()
    this.setState({
      dailyData: data
    })
  }

  render() {
    const { dailyData } = this.state
    let lineData = {}

    if(dailyData.length) {
      lineData = {
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: 'Infected',
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: 'lightblue',
            fill: true
          },
          {
            label: 'Deaths',
            data: dailyData.map(({ deaths }) => deaths),
            borderColor: 'red',
            backgroundColor: 'rgb(255, 0, 0, 0.2)',
            fill: true
          }
        ]
      }
    }

    return (
      <div className={styles.container}>
        {dailyData.length
          ? <Line data={lineData} />
          : null
        }
      </div>
    )
    // return (
    //   <span>Hola</span>
    // )
  }
}
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
    const { countryData, country } = this.props

    let lineChartData = {}
    let barChartData = {}
    let barChartOptions = {}

    if(dailyData.length) {
      lineChartData = {
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

    if(country) {
      barChartData = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: [
            'lightblue',
            'lightgreen',
            'rgb(255, 0, 0, 0.7)'
          ],
          data: [
            countryData.confirmed.value,
            countryData.recovered.value,
            countryData.deaths.value
          ]
        }]
      }
      barChartOptions = {
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` }
      }
    }

    return (
      <div className={styles.container}>
        {!country
          ? <Line data={lineChartData} />
          : <Bar
              data={barChartData}
              options={barChartOptions}
            />
        }
      </div>
    )
    // return (
    //   <span>Hola</span>
    // )
  }
}
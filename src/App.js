import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data })
  }

  handleCountryChange = (country) => {
    this.setState({ country })
  }

  render() {
    const data = this.state.data

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker country={this.state.country} onCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;

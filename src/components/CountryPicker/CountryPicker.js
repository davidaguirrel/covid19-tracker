import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

export default class CountryPicker extends React.Component {
  state = {
    countries: []
  }

  async componentDidMount() {
    const data = await fetchCountries()
    this.setState({
      countries: data
    })
  }

  render() {
    const onCountryChange = this.props.onCountryChange
    const { countries } = this.state

    return (
      <div className={styles.container} >
        <FormControl>
          <NativeSelect defaultValue='' onChange={(e) => onCountryChange(e.target.value)} >
            <option value="global">Global</option>
            {countries.length &&
              countries.map((country, index) => (
                <option key={index} value={country.name}>{country.name}</option>
              ))
            }
          </NativeSelect>
        </FormControl>
      </div>
    )
  }
}
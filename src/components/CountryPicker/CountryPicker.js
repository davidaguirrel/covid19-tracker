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

  filterCountries = (country) => {
    const name = country.name
    if (name === 'US' || name === 'Spain' || name === 'China' || name === 'Italy' ) {
      return false
    } else { return true }
  }

  render() {
    const onCountryChange = this.props.onCountryChange
    const { countries } = this.state

    return (
      <div className={styles.container} >
        <FormControl>
          <NativeSelect defaultValue='' onChange={(e) => onCountryChange(e.target.value)} >
            <option value="">Global</option>
            <option styles='width: 100%' disabled>------------------</option>
            <option value="US">US</option>
            <option value="Spain">Spain</option>
            <option value="China">China</option>
            <option value="Italy">Italy</option>
            <option styles='width: 100%' disabled>------------------</option>
            {countries.length &&
              countries.filter(this.filterCountries).map((country, index) => (
                <option key={index} value={country.name}>{country.name}</option>
              ))
            }
          </NativeSelect>
        </FormControl>
      </div>
    )
  }
}
import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

import styles from './Cards.module.css'

export default function Cards ({ data }) {
  const {
    confirmed,
    deaths,
    recovered,
    lastUpdate
  } = data

  if(!confirmed) return 'Loading...'

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center' >
        <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.infected}`}>
          <CardContent>
            <Typography color='textSecondary' >Confirmed</Typography>
            <Typography variant='h5' >
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.recovered}`}>
          <CardContent>
            <Typography color='textSecondary' >Recovered</Typography>
            <Typography variant='h5' >
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles.deaths}`}>
          <CardContent>
            <Typography color='textSecondary' >Deaths</Typography>
            <Typography variant='h5' >
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2' >Number of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
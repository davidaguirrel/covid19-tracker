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

  let grids = []

  if(confirmed){
    grids = [
      {
        style: styles.confirmed,
        textSecondary: 'Confirmed',
        end: confirmed.value,
        body2: 'Number of active cases'
      },
      {
        style: styles.recovered,
        textSecondary: 'Recovered',
        end: recovered.value,
        body2: 'Number of people recovered'
      },
      {
        style: styles.deaths,
        textSecondary: 'Deaths',
        end: deaths.value,
        body2: 'Number of deaths'
      }
    ]
  }

  if(!confirmed) return 'Loading...'

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center' >
        {grids.map((gridItem, i) => (
          <Grid item key={i} component={Card} xs={12} md={3} className={`${styles.card} ${gridItem.style}`} >
            <CardContent>
              <Typography color='textSecondary' >{gridItem.textSecondary}</Typography>
              <Typography variant='h5' >
                <CountUp
                  start={0}
                  end={gridItem.end}
                  duration={3}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant='body2' >{gridItem.body2}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
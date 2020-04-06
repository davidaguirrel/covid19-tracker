import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

export default function Cards ({ data }) {
  console.log(data)
  return (
    <div >
      <Grid container spacing={3} justify='center' >
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' >Infected</Typography>
            <Typography variant='h5' >REAL DATA</Typography>
            <Typography color='textSecondary' >REAL DATE</Typography>
            <Typography variant='body2' >Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' >Recovered</Typography>
            <Typography variant='h5' >REAL DATA</Typography>
            <Typography color='textSecondary' >REAL DATE</Typography>
            <Typography variant='body2' >Number of recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' >Deaths</Typography>
            <Typography variant='h5' >REAL DATA</Typography>
            <Typography color='textSecondary' >REAL DATE</Typography>
            <Typography variant='body2' >Number of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
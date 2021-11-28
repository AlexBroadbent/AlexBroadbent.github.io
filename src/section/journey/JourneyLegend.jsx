import React from 'react'
import { TimelineDot } from '@mui/lab'
import { Grid, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    key: {
      width: '10px'
    },
    label: {
      paddingLeft: theme.spacing(0.75),
      paddingRight: theme.spacing(2)
    }
  })
)

function JourneyLegend() {
  const classes = useStyles()

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <TimelineDot color="secondary" className={classes.key} />
      <Typography variant="p" className={classes.label}>
        Career
      </Typography>
      <TimelineDot color="info" className={classes.key} />
      <Typography variant="p" className={classes.label}>
        Contractor
      </Typography>
      <TimelineDot color="warning" className={classes.key} />
      <Typography variant="p" className={classes.label}>
        Projects
      </Typography>
      <TimelineDot color="primary" className={classes.key} />
      <Typography variant="p" className={classes.label}>
        Education
      </Typography>
    </Grid>
  )
}

export default JourneyLegend

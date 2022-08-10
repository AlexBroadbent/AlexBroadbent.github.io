import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import TimelineDot from '@mui/lab/TimelineDot'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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

export function JourneyLegend() {
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
      <TimelineDot color="success" className={classes.key} />
      <Typography variant="p" className={classes.label}>
        Education
      </Typography>
    </Grid>
  )
}

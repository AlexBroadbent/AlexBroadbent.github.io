import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      paddingTop: 0,
      paddingBottom: 0
    },
    title: {
      fontWeight: 700,
      paddingBottom: theme.spacing(1)
    },
    subtitle: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
      fontWeight: 600
    }
  })
)

JourneyItemEducation.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
}

export function JourneyItemEducation({ time, title, school, children, sx }) {
  const classes = useStyles()

  return (
    <TimelineItem>
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.2 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="success" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.content} {...sx}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          {school}
        </Typography>
        {children}
      </TimelineContent>
    </TimelineItem>
  )
}

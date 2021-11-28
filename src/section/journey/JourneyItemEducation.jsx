import React from 'react'
import PropTypes from 'prop-types'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'
import { Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      paddingBottom: theme.spacing(1)
    },
    subtitle: {
      padding: theme.spacing(0.5, 0)
    }
  })
)

JourneyItemEducation.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function JourneyItemEducation({ time, title, school, children }) {
  const classes = useStyles()

  return (
    <TimelineItem>
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.2 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
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

export default JourneyItemEducation

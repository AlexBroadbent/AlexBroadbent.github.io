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
      fontWeight: 700,
      paddingBottom: theme.spacing(1)
    },
    subtitle: {
      paddingTop: theme.spacing(1),
      fontWeight: 600
    }
  })
)

JourneyItemContract.propTypes = {
  time: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.string,
  children: PropTypes.node
}

function JourneyItemContract({ time, client, title, techStack, children }) {
  const classes = useStyles()

  return (
    <TimelineItem>
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.2 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="info" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" className={classes.title}>
          {title} for {client}
        </Typography>

        {children}

        {techStack && (
          <>
            <Typography variant="body2" className={classes.subtitle}>
              Tech Stack
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {techStack}
            </Typography>
          </>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

export default JourneyItemContract

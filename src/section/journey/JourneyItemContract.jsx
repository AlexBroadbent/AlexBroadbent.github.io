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
      paddingBottom: theme.spacing(2)
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

JourneyItemContract.propTypes = {
  time: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.string,
  children: PropTypes.node
}

export function JourneyItemContract({ time, client, title, techStack, children }) {
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
      <TimelineContent className={classes.content}>
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

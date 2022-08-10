import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%'
    },
    title: {
      fontWeight: 600
    }
  })
)

JourneyItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  year: PropTypes.string.isRequired,
  colorVariant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export function JourneyItem(props) {
  const classes = useStyles()

  return (
    <TimelineItem className={classes.root}>
      <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
        {props.year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={props.colorVariant} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" className={classes.title}>
          {props.title}
        </Typography>
        {props.children}
        {props.link && (
          <Typography variant="body2" component={Link} href={props.link}>
            View website
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

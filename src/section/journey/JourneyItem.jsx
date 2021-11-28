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
import { Link, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

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

function JourneyItem(props) {
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

export default JourneyItem

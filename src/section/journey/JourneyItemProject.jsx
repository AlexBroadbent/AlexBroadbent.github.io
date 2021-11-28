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
import { CardActions, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import ButtonLink from '../../component/ButtonLink'

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontWeight: 700,
      paddingBottom: theme.spacing(1)
    }
  })
)

JourneyItemProject.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  children: PropTypes.node
}

function JourneyItemProject({ time, title, link, linkText, children }) {
  const classes = useStyles()

  return (
    <TimelineItem>
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.2 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="warning" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        {children}
        <CardActions>
          <ButtonLink href={link}>{linkText}</ButtonLink>
        </CardActions>
      </TimelineContent>
    </TimelineItem>
  )
}

export default JourneyItemProject

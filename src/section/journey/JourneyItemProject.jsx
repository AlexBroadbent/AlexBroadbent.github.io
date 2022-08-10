import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { ButtonLink } from '../../component'

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    },
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

export function JourneyItemProject({ time, title, link, linkText, children }) {
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
      <TimelineContent className={classes.content}>
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

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
import { CardActions, List, ListItemText, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import ButtonLink from '../../component/ButtonLink'

const useStyles = makeStyles((theme) =>
  createStyles({
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

JourneyItemPerm.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilities: PropTypes.array,
  techStack: PropTypes.string,
  website: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function JourneyItemPerm({
  company,
  time,
  location,
  title,
  responsibilities,
  techStack,
  website,
  children
}) {
  const classes = useStyles()

  return (
    <TimelineItem>
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.2 }}>
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" className={classes.title}>
          {company}
        </Typography>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{location}</Typography>

        {responsibilities && (
          <>
            <Typography variant="body2" className={classes.subtitle}>
              Responsibilities
            </Typography>
            <Typography variant="body2" component={List} sx={{ paddingTop: 0 }}>
              {responsibilities.map((responsibility) => (
                <Typography
                  variant="body2"
                  sx={{
                    pt: 0.5,
                    '& .MuiTypography-body1': {
                      fontSize: '0.875rem'
                    }
                  }}
                  component={ListItemText}
                  key={responsibility}
                >
                  > {responsibility}
                </Typography>
              ))}
            </Typography>
          </>
        )}

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

        {children}

        <CardActions>
          <ButtonLink href={website}>View Website</ButtonLink>
        </CardActions>
      </TimelineContent>
    </TimelineItem>
  )
}

export default JourneyItemPerm

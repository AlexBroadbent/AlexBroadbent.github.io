import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import ListItemText from '@mui/material/ListItemText'
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

JourneyItemPerm.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilities: PropTypes.array,
  techStack: PropTypes.string,
  website: PropTypes.string.isRequired,
  children: PropTypes.node
}

export function JourneyItemPerm({
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
      <TimelineContent className={classes.content}>
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

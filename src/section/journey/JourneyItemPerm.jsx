import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Link } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const JourneyItemPerm = ({
  company,
  time,
  location,
  title,
  responsibilities,
  techStack,
  website,
  children
}) => (
  <TimelineItem>
    <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.12 }}>
      {time}
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ pt: 0, mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
        {company}
      </Typography>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body1" gutterBottom>
        {location}
      </Typography>

      {responsibilities && (
        <>
          <Typography variant="body2" sx={{ pt: 1, fontWeight: 'bold' }}>
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
                  },
                  ml: 2
                }}
                component={ListItemText}
                key={responsibility}
              >
                • {responsibility}
              </Typography>
            ))}
          </Typography>
        </>
      )}

      {techStack && (
        <>
          <Typography variant="body2" sx={{ pt: 1, fontWeight: 'bold' }}>
            Tech Stack
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', ml: 2 }}>
            {techStack.join(', ')}
          </Typography>
        </>
      )}

      {children}

      <CardActions sx={{ pt: 2, px: 0 }}>
        <Link href={website}>View Company Website</Link>
      </CardActions>
    </TimelineContent>
  </TimelineItem>
)

JourneyItemPerm.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string),
  website: PropTypes.string.isRequired,
  children: PropTypes.node
}

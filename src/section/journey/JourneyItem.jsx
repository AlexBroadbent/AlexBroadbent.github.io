import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const JourneyItem = ({ time, title, colour, children, variant, ...contentSx }) => (
  <TimelineItem>
    <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.12 }}>
      {time}
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot color={colour} variant={variant || 'filled'} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ pt: 0, mb: 2, ...contentSx }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 1 }}>
        {title}
      </Typography>
      {children}
    </TimelineContent>
  </TimelineItem>
)

JourneyItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

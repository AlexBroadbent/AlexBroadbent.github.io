import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Link } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      paddingTop: '0 !important',
      marginBottom: `${theme.spacing(4)} !important`
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
      <TimelineOppositeContent variant="body2" color="text.secondary" sx={{ flex: 0.12 }}>
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
        <CardActions sx={{ pt: 1, px: 0 }}>
          <Link href={link}>{linkText}</Link>
        </CardActions>
      </TimelineContent>
    </TimelineItem>
  )
}

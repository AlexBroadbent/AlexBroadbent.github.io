import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { JourneyLink } from '../../component'
import { useView } from '../../hook'
import { JourneyItem } from './JourneyItem'
import { JourneyText } from './JourneyText'
import { Responsibilities } from './Responsibilities'
import { TechStack } from './TechStack'

export const JourneyItemPerm = ({
  company,
  time,
  location,
  title,
  responsibilities,
  techStack,
  website,
  children
}) =>
  useView(
    <JourneyItemPermDesktop
      company={company}
      time={time}
      location={location}
      title={title}
      children={children}
    />,
    <JourneyItemPermMobile
      company={company}
      time={time}
      location={location}
      title={title}
      responsibilities={responsibilities}
      techStack={techStack}
      website={website}
      children={children}
    />
  )

const JourneyItemPermDesktop = ({
  company,
  time,
  location,
  title,
  responsibilities,
  techStack,
  website,
  children
}) => (
  <JourneyItem time={time} title={company} colour="secondary">
    <Typography variant="body1">{title}</Typography>
    <Typography variant="body2" gutterBottom>
      {location}
    </Typography>

    {responsibilities && <Responsibilities responsibilities={responsibilities} />}
    {techStack && <TechStack stack={techStack} />}

    {children}

    <CardActions sx={{ py: 1, pl: 0 }}>
      <JourneyLink href={website}>View Company Website</JourneyLink>
    </CardActions>
  </JourneyItem>
)

const JourneyItemPermMobile = ({ company, time, location, title, children }) => (
  <JourneyItem time={time} title={company} colour="secondary">
    <Typography variant="body1">{title}</Typography>
    <JourneyText>Permanent</JourneyText>
    <Typography variant="body2" gutterBottom sx={{ mt: 1 }}>
      {location}
    </Typography>
    {children}
  </JourneyItem>
)

JourneyItemPerm.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string),
  website: PropTypes.string,
  children: PropTypes.node
}

JourneyItemPermDesktop.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string),
  website: PropTypes.string,
  children: PropTypes.node
}

JourneyItemPermMobile.propTypes = {
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

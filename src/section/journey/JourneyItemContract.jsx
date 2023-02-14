import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useView } from '../../hook'
import { JourneyItem } from './JourneyItem'
import { JourneyText } from './JourneyText'
import { TechStack } from './TechStack'

export const JourneyItemContract = ({ time, client, title, techStack, children, ...rest }) =>
  useView(
    <JourneyItemContractDesktop
      time={time}
      client={client}
      title={title}
      techStack={techStack}
      {...rest}
    >
      {children}
    </JourneyItemContractDesktop>,
    <JourneyItemContractMobile time={time} client={client} title={title} {...rest} />
  )

const JourneyItemContractDesktop = ({ time, client, title, techStack, children, ...rest }) => (
  <JourneyItem
    time={time}
    title={`${title} for ${client}`}
    colour="secondary"
    variant="outlined"
    {...rest}
  >
    {children}
    {techStack && <TechStack stack={techStack} />}
  </JourneyItem>
)
const JourneyItemContractMobile = ({ time, client, title, ...rest }) => (
  <JourneyItem time={time} title={title} colour="secondary" variant="outlined" {...rest}>
    <Typography variant="body1" gutterBottom>
      For {client}
    </Typography>
    <JourneyText>Contractor</JourneyText>
  </JourneyItem>
)

JourneyItemContract.propTypes = {
  time: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}

JourneyItemContractDesktop.propTypes = {
  time: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}

JourneyItemContractMobile.propTypes = {
  time: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

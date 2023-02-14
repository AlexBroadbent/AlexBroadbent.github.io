import CardActions from '@mui/material/CardActions'
import PropTypes from 'prop-types'
import { ButtonLink } from '../../component'
import { useView } from '../../hook'
import { JourneyItem } from './JourneyItem'
import { JourneyText } from './JourneyText'

export const JourneyItemProject = ({ time, title, link, linkText, children }) =>
  useView(
    <JourneyItemProjectDesktop time={time} title={title} link={link} linkText={linkText}>
      {children}
    </JourneyItemProjectDesktop>,
    <JourneyItemProjectMobile time={time} title={title} link={link} linkText={linkText} />
  )

const JourneyItemProjectDesktop = ({ time, title, link, linkText, children }) => (
  <JourneyItem time={time} title={title} colour="warning" variant="outlined">
    {children}
    <CardActions sx={{ pt: 1, px: 0 }}>
      <ButtonLink href={link}>{linkText}</ButtonLink>
    </CardActions>
  </JourneyItem>
)

const JourneyItemProjectMobile = ({ time, title, link, linkText }) => (
  <JourneyItem time={time} title={title} colour="warning" variant="outlined">
    <JourneyText>Project</JourneyText>
    <ButtonLink sx={{ m: 0, p: 0, mt: 1, fontWeight: 500 }} href={link}>
      {linkText}
    </ButtonLink>
  </JourneyItem>
)

JourneyItemProject.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  children: PropTypes.node
}

JourneyItemProjectDesktop.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  children: PropTypes.node
}

JourneyItemProjectMobile.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
}

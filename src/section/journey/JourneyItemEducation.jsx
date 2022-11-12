import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { useView } from '../../hook'
import { JourneyItem } from './JourneyItem'
import { JourneyText } from './JourneyText'

export const JourneyItemEducation = ({ time, title, school, children, contentSx }) =>
  useView(
    <JourneyItemEducationDesktop time={time} title={title} school={school} contentSx={contentSx}>
      {children}
    </JourneyItemEducationDesktop>,
    <JourneyItemEducationMobile time={time} title={title} school={school} contentSx={contentSx} />
  )

const JourneyItemEducationDesktop = ({ time, title, school, children, contentSx }) => (
  <JourneyItem time={time} title={title} colour="success" contentSx={contentSx}>
    <Typography variant="subtitle2" sx={{ pt: 1, pb: 0.5, fontWeight: 600 }}>
      {school}
    </Typography>
    {children}
  </JourneyItem>
)

const JourneyItemEducationMobile = ({ time, title, school, contentSx }) => (
  <JourneyItem time={time} title={title} colour="success" contentSx={contentSx}>
    <JourneyText>Education</JourneyText>
    <Typography variant="subtitle2" sx={{ pt: 1, pb: 0.5, fontWeight: 600 }}>
      {school}
    </Typography>
  </JourneyItem>
)

JourneyItemEducation.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  contentSx: PropTypes.any
}

JourneyItemEducationDesktop.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  contentSx: PropTypes.any
}

JourneyItemEducationMobile.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  contentSx: PropTypes.any
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const ImageLink = ({ icon, link }) => (
  <Typography variant="h1" sx={{ fontWeight: 'bold' }} component={Link} href={link}>
    <FontAwesomeIcon sx={{ fontWeight: 500, mr: 2 }} icon={icon} />
  </Typography>
)

ImageLink.propTypes = {
  icon: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired
}

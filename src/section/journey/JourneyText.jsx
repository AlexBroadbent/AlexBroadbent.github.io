import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const JourneyText = ({ children }) => (
  <Typography variant="body2" sx={{ color: 'gray', py: 0, my: 0 }}>
    {children}
  </Typography>
)

JourneyText.propTypes = {
  children: PropTypes.any
}

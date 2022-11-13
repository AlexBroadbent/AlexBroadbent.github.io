import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const Paragraph = ({ children }) => (
  <Typography variant="body2" sx={{ py: 1 }}>
    {children}
  </Typography>
)

Paragraph.propTypes = {
  children: PropTypes.any
}

import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const TechStack = ({ stack }) => (
  <>
    <Typography variant="subtitle2" sx={{ pt: 1, pb: 0.5, fontWeight: 600 }}>
      Tech Stack
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 2 }}>
      {stack.join(', ')}
    </Typography>
  </>
)

TechStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired
}

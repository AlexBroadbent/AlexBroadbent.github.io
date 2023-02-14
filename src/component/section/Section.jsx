import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

export const Section = ({ title, children }) => (
  <Box sx={{ m: 2, mt: 7 }} elevation={4}>
    {title && (
      <Typography
        variant="h3"
        id={title.toLowerCase()}
        sx={{ display: 'flex', justifyContent: 'center', my: 2, py: 2, fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    )}
    {children}
  </Box>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

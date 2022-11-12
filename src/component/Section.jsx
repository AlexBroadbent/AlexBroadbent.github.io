import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Section = ({ title, children }) => (
  <Box sx={{ m: 2, mt: 5 }} elevation={5}>
    {title && (
      <Typography
        variant="h3"
        id={title.toLowerCase()}
        sx={{ display: 'flex', justifyContent: 'center', m: 2, p: 2 }}
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

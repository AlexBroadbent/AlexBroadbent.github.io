import PropTypes from 'prop-types'
import { Button } from '@mui/material'

export const JourneyLink = ({ href, children, internal, ...other }) => (
  <Button
    href={href}
    target={internal ? '' : '_blank'}
    rel={internal ? '' : 'noopener'}
    sx={{ fontWeight: 500, m: 1, p: 1 }}
    {...other}
  >
    {children}
  </Button>
)

JourneyLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool
}

import PropTypes from 'prop-types'
import { Button } from '@mui/material'

export const ButtonLink = ({ href, children, internal, ...other }) => (
  <Button
    variant="outlined"
    href={href}
    target={internal ? '' : '_blank'}
    rel={internal ? '' : 'noopener'}
    sx={{ fontWeight: 500 }}
    {...other}
  >
    {children}
  </Button>
)

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool
}

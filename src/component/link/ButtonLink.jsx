import PropTypes from 'prop-types'
import { Button } from '@mui/material'

export const ButtonLink = ({ href, children, internal, ...other }) => (
  <Button
    href={href}
    target={internal ? '' : '_blank'}
    rel={internal ? '' : 'noopener'}
    sx={{ fontWeight: 500 }}
    {...other}
  >
    {children}
  </Button>
)

export const BlogLink = ({ href }) => <ButtonLink href={href}>Blog Post</ButtonLink>

export const CodeLink = ({ href }) => <ButtonLink href={href}>Code</ButtonLink>

export const ArtifactLink = ({ href }) => <ButtonLink href={href}>Published Artifacts</ButtonLink>

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool
}

BlogLink.propTypes = {
  href: PropTypes.string.isRequired
}

CodeLink.propTypes = {
  href: PropTypes.string.isRequired
}

ArtifactLink.propTypes = {
  href: PropTypes.string.isRequired
}

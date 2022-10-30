import React from 'react'
import PropTypes from 'prop-types'
import { Button, Link } from '@mui/material'

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool
}

export function ButtonLink({ href, children, internal }) {
  const target = internal ? '' : '_blank'
  const rel = internal ? '' : 'noopener'

  return (
    <Button variant="contained" component={Link} href={href} target={target} rel={rel}>
      {children}
    </Button>
  )
}

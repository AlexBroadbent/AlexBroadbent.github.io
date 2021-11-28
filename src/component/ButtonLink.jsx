import React from 'react'
import PropTypes from 'prop-types'
import { Button, Link } from '@mui/material'

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function ButtonLink({ href, children }) {
  return (
    <Button component={Link} href={href} target="_blank" rel="noopener">
      {children}
    </Button>
  )
}

export default ButtonLink

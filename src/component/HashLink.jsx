import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

HashLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export function HashLink({ href, children, ...props }) {
  return (
    <Typography {...props} component="a" href={href}>
      {children}
    </Typography>
  )
}

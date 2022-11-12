import React from 'react'
import PropTypes from 'prop-types'
import Link from '@mui/material/Link'

export const TextLink = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener">
    {children}
  </Link>
)

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

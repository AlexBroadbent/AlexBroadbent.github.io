import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@mui/material'

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

function TextLink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noopener">
      {children}
    </Link>
  )
}

export default TextLink

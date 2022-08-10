import React from 'react'
import PropTypes from 'prop-types'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontWeight: 700
    },
    icon: {
      fontWeight: 500,
      marginRight: theme.spacing(2)
    }
  })
)

ImageLink.propTypes = {
  icon: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired
}

export function ImageLink({ icon, link }) {
  const classes = useStyles()

  return (
    <Typography variant="h3" className={classes.root} component={Link} href={link}>
      <FontAwesomeIcon className={classes.icon} icon={icon} />
    </Typography>
  )
}

import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export function Footer() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 10, p: 5 }}
    >
      <Grid item>
        <Typography variant="subtitle2">
          &copy; {new Date().getFullYear()} Alexander Broadbent
        </Typography>
      </Grid>
    </Grid>
  )
}

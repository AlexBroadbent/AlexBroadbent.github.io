import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Stack } from '@mui/material'
import TestimonialItem from './TestimonialItem'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1)
    },
    text: {
      fontWeight: 500
    }
  })
)

function Testimonials() {
  const classes = useStyles()

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" className={classes.root}>
      <TestimonialItem
        client="Handmade in Harpenden"
        name="Farhana Haque"
        imageUrl="https://images.squarespace-cdn.com/content/v1/5cf845ccf67cc80001c438b1/1601892092854-YY9N4E7GOPN6X1MC5NWT/imgonline-com-ua-compressed-fuI2om7Ujands.jpg?format=1500w"
        website="https://handmadeinharpenden.com"
      >
        .........................................................................................
        .........................................................................................
        .........................................................................................
        .........................................................................................
        .........................................................................................
        .........................................................................................
        .........................................................................................
      </TestimonialItem>
    </Stack>
  )
}

export default Testimonials

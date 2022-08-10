import React from 'react'
import Box from '@mui/material/Box'
import Intro from './section/Intro'
import Blog from './section/blog/Blog'
import { Contact } from './section/Contact'
import { Journey } from './section/journey'
import { Portfolio } from './section/Portfolio'
import { Testimonials } from './section/testimonial/Testimonials'
import { Footer } from './section/Footer'

export function Homepage() {
  return (
    <Box>
      <Intro />
      <Portfolio />
      <Blog />
      <Testimonials />
      <Journey />
      <Contact />
      <Footer />
    </Box>
  )
}

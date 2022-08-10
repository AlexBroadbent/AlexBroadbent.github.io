import React from 'react'
import Typography from '@mui/material/Typography'
import { TestimonialItem } from './TestimonialItem'
import { Section } from '../../component'

export function Testimonials() {
  return (
    <Section title="Testimonials">
      <TestimonialItem
        client="Handmade in Harpenden"
        name="Farhana Haque"
        position="Founder"
        imageUrl="farhana-haque.jpeg"
        website="https://handmadeinharpenden.com"
      >
        <Typography variant="body1" paragraph>
          Alex listened to the problems that I was trying to solve for, he took the time to fully
          understand what I needed and found the best solution that fit our budget. He delivered a
          bespoke solution to our needs within the time frame that he estimated and delivered some
          additional features afterwards.
        </Typography>
        <Typography variant="body1">
          The dashboard that Alex built saves us a lot of time in having to go through all our
          different sources of income to work out how well we&apos;re doing and if we&apos;re on
          target, giving us more time to focus and be productive.
        </Typography>
      </TestimonialItem>
    </Section>
  )
}

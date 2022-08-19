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
          Alex has been great to work with in building a fully bespoke sales and target tracking
          dashboard. He is extremely patient and understanding, with an exceptional ability to
          convert technical knowledge into business speak. He kept us in the loop with progress
          during the project and provided regular updates for feedback. The whole team now use the
          dashboard he built us every single day as our single source of truth, which helps us
          monitor team targets and decide strategy in real time to keep on target before each month
          ends.
        </Typography>
      </TestimonialItem>
    </Section>
  )
}

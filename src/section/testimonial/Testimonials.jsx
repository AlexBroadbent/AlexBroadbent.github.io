import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { TestimonialItem } from './TestimonialItem'
import { Section } from '../../component'

export const Testimonials = () => (
  <Section title="Testimonials">
    <Grid container spacing={2}>
      <TestimonialItem client="Handmade in Harpenden" name="Farhana Haque" position="Founder">
        <Typography variant="body1" paragraph>
          Alex has been great to work with in building a fully bespoke sales and target tracking
          dashboard. He is extremely patient and understanding, with an exceptional ability to
          convert technical knowledge into business speak. He kept us in the loop with progress
          during the project and provided regular updates for feedback.
        </Typography>
        <Typography variant="body1" paragraph>
          The whole team now use the dashboard he built us every single day as our single source of
          truth, which helps us monitor team targets and decide strategy in real time to keep on
          target before each month ends.
        </Typography>
      </TestimonialItem>
      <TestimonialItem client="Tesco" name="Jack Clare" position="Senior Product Manager">
        <Typography variant="body1" paragraph>
          I have had a great experience working with Alex as a software engineer within Tesco. He
          can quickly pick up new domain concepts and has a sound technical ability to turn
          requirements into working software, even picking up on edge cases or additional
          considerations not originally covered. Best wishes for the future and I hope to work with
          you again soon!
        </Typography>
      </TestimonialItem>
    </Grid>
  </Section>
)

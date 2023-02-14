import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ImageLink, Section } from '../component'

export const Contact = () => (
  <Section title="Contact">
    <Box
      sx={{ display: 'flex' }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ContactEmail />
      <ContactFollow />
    </Box>
  </Section>
)

const ContactEmail = () => (
  <>
    <Typography variant="h5" sx={{ fontWeight: 500 }}>
      Email
    </Typography>

    <ImageLink icon={faEnvelope} link="mailto:hello@abroadbent.com" />
  </>
)

const ContactFollow = () => (
  <>
    <Typography variant="h5" sx={{ fontWeight: 500, mt: 4 }}>
      Follow
    </Typography>

    <Stack direction="row" spacing={2}>
      <ImageLink
        icon={faMedium}
        link="https://alex-broadbent.medium.com"
        other={{ fontSize: '1.4rem' }}
      />
      <ImageLink icon={faGithubSquare} link="https://github.com/alexbroadbent" />
      <ImageLink icon={faLinkedin} link="https://linkedin.com/in/alexander-broadbent" />
    </Stack>
  </>
)

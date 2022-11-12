import { faGithubSquare, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ImageLink, Section } from '../component'

export const Contact = () => (
  <Section title="Contact">
    <Box
      sx={{ display: 'flex', m: 1, p: 1 }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        Reach me at
      </Typography>

      <Typography
        variant="h4"
        component={Link}
        sx={{ fontWeight: 900 }}
        href="mailto:hello@abroadbent.com"
      >
        hello@abroadbent.com
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 700, mt: 2 }}>
        Follow me on
      </Typography>

      <Stack direction="row" spacing={2}>
        <ImageLink icon={faMedium} link="https://alex-broadbent.medium.com" />
        <ImageLink icon={faGithubSquare} link="https://github.com/alexbroadbent" />
        <ImageLink icon={faLinkedin} link="https://linkedin.com/in/alexander-broadbent" />
      </Stack>
    </Box>
  </Section>
)

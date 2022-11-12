import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useView } from '../hook'

export const Intro = () =>
  useView(
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ display: 'flex', pt: 10, px: 2, my: 1, mx: 2, lineHeight: '150px' }}
    >
      <Box sx={{ pt: '1vh', pb: '2vh', pr: '1vh' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textShadow: (theme) => `3px 3px ${theme.palette.grey['400']}`
          }}
        >
          Alexander Broadbent
        </Typography>
      </Box>

      <Box sx={{ pt: '3vh', pb: '5vh', lineHeight: '150px' }}>
        <Typography variant="h4" sx={{ fontSize: '1.7rem', fontWeight: 'bold' }}>
          Principal Software Engineer
        </Typography>
      </Box>
    </Box>,
    <Stack>
      <Typography
        variant="h1"
        sx={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: (theme) => `3px 3px ${theme.palette.grey['400']}`,
          my: 4
        }}
      >
        Alexander Broadbent
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: '1.7rem',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Principal Software Engineer
      </Typography>
    </Stack>
  )

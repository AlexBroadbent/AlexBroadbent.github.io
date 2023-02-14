import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

export const Intro = () => (
  <Grid container direction="column" justifyContent="center" alignItems="center">
    <Avatar
      alt="Alexander Broadbent"
      src="https://miro.medium.com/fit/c/176/176/1*ldsrryX0jRn7iVppXY7ZXQ.jpeg"
      sx={{ width: 128, height: 128 }}
    />
    <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', py: '1vh' }}>
      Alexander Broadbent
    </Typography>
    <Typography
      variant="h3"
      sx={{ fontSize: '1.5rem', fontWeight: 'bold', py: '1vh', color: 'text.secondary' }}
    >
      Principal Software Engineer
    </Typography>
  </Grid>
)

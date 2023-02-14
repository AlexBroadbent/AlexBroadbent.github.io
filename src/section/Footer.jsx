import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Footer = () => (
  <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 5, mb: 3 }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} Alexander Broadbent</Typography>
  </Box>
)

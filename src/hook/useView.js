import useMediaQuery from '@mui/material/useMediaQuery'

export const useView = (desktopView, mobileView) =>
  useMediaQuery('(min-width:600px)') ? desktopView : mobileView

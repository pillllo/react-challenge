import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';

export const Error = ({ error }) => {
  const getMessage = () => {
    if (error?.message?.includes('Network Error')) return 'Uruchom server';
    return 'Ups! Wystąpił nieoczekiwany błąd. Odśwież stronę.';
  };

  return (
    <Box display={'flex'}>
      <ErrorIcon />
      {getMessage()}
    </Box>
  );
};

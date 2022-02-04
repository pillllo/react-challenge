import { Box, Typography } from '@mui/material';
import imageNoContent from '../../assets/no_content.png';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>
            Uruchom Server! <img src={imageNoContent} alt="" />
          </Typography>
        ) : null //  TODO in TASK 1
      }
    </Box>
  );
};

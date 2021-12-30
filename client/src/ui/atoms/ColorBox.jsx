import React from 'react';

import { Box } from '@mui/material';

export const ColorBox = ({ color }) => {
  return (
    <Box
      sx={{
        background: color,
        width: '16px',
        height: '16px',
        borderRadius: '2px',
        marginRight: '10px',
      }}
    />
  );
};

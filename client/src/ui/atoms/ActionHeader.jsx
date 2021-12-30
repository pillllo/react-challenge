import { Box, Typography } from '@mui/material';
import React from 'react';
import * as PropTypes from 'prop-types';

export const ActionHeader = ({
  title,
  variant,
  renderActions = () => null,
}) => {
  return (
    <Box
      paddingBottom={3}
      spacing={{
        xs: 3,
        md: 0,
      }}
    >
      <Typography component={variant} variant={variant} marginBottom={3}>
        {title}
      </Typography>
      {renderActions()}
    </Box>
  );
};

ActionHeader.propTypes = {
  title: PropTypes.any,
  actions: PropTypes.any,
};

ActionHeader.defaultProps = {
  variant: 'h3',
};

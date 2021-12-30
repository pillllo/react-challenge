import { Card as MuiCard, CardContent, CardHeader } from '@mui/material';

export const Card = ({ title, subheader, children }) => {
  return (
    <MuiCard variant="outlined">
      <CardHeader title={title} subheader={subheader} />
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

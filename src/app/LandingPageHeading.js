import * as React from 'react';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

export default function LandingPageHeading() {
  return (
    <Box
      position={'absolute'}
      borderRadius={'5%'}
      padding={'auto'}
      right={'3vw'}
      top={'15vh'}
      height={'20vh'}
      minWidth={'50vw'}
      width={'70vw'}
      padding={'4'}
    >
      <Typography sx={{ fontSize: { xs: '1.6rem', md: '2.5rem', lg: '3rem' }, }} textAlign={'center'}>
        Software Engineer
        x
        Personal Trainer
      </Typography>
    </Box>
  );
}
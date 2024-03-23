import * as React from 'react';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

export default function LandingPageText() {
  return (
    <Box
     component={'paper'}
     elevation={2}
     position={'absolute'}
     borderRadius={'2%'}
     padding={'1rem'}
     right={'10vw'}
     bottom={'3vh'}
     height={'35vh'}
     width={'80vw'}

      >
      <Typography sx={{ fontSize: { sm:'1rem', md:'1.3rem', lg:'1.6rem'},}} textAlign={'center'} color={'white'}>
      My intention for this website is not only to showcase my projects, but to convey my thoughts, beliefs, and values.
      Thanks for stopping by.
      </Typography>
    </Box>
  );
}
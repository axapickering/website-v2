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
     right={'5vw'}
     bottom={'3vh'}
     height={'55vh'}
     width={'90vw'}

      >
      <Typography sx={{ fontSize: { sm:'1.6rem', md:'1.7rem', lg:'2rem'},}} textAlign={'center'}>
      My intention for this website is not only to showcase my projects, but to convey my thoughts, beliefs, and values.
      </Typography>
    </Box>
  );
}
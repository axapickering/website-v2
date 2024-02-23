import * as React from 'react';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';

export default function LandingPageText() {
  return (
    <Box
     position={'absolute'}
     borderRadius={'10%'}
     padding={'1rem'}
     right={'10vw'}
     bottom={'2vh'}
     height={'60vh'}
     width={'80vw'}
     bgcolor={'lightsteelblue'}
      >
      <Typography textAlign={'center'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien enim, vulputate eget felis nec, aliquet rhoncus sapien. Aliquam vel porttitor ex, dictum scelerisque est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae tincidunt felis. Sed ut tempus tellus, non tincidunt lorem. Vestibulum purus tortor, facilisis sit amet vulputate a, consequat sed mauris.
      </Typography>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/system/Box';
import Image from 'next/image';

export default function headshot() {
  return (
    <Box component='img'
      position='absolute'
      left='5%'
      top='15%'
      maxHeight={'20vh'}
      borderRadius={'30%'}
      src='/headshot.jpg'
      alt='a picture of me. i am smiling.' />
  );
}
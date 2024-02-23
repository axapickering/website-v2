import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/system/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {

  const pages = [
    ['Home', '/'],
    ['About', 'about-me'],
    ['Portfolio', '/portfolio'],
  ];

  const icons = [
    [<GitHubIcon />, 'https://github.com/axapickering', '#FFFFFF'],
    [<LinkedInIcon />, 'https://www.linkedin.com/in/axapickering/', '#FFFFFF'],
  ];

  const pageLinks = pages.map(page => {
    return (
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={page[1]} color='inherit' underline='hover'>
          {page[0]}
      </Link>
        </Typography>
    );
  });

  const iconLinks = icons.map(icon => {
    return (
      <Link href={icon[1]} color={icon[2]} mx={1}>
        {icon[0]}
      </Link>
    );
  });




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {pageLinks}
          {iconLinks}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

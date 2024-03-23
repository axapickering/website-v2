'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

export default function ProjectCard({ project }) {

  const { name, stack, github, demo, description} = project;

  return (
    <Card sx={{ maxWidth: 345 }} value={10}>
      <CardHeader
        title={name}
        subheader={stack}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Link href={github}>
        <IconButton aria-label="github link">
          <GitHubIcon/>
        </IconButton>
      </Link>
      <Link href={demo}>
        <IconButton aria-label="demo link">
          <LanguageIcon/>
        </IconButton>
      </Link>
    </Card>
  );
}

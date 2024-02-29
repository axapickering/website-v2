'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ project }) {

  const { name, stack, github, demo, description} = project;

  return (
    <Card sx={{ maxWidth: 345 }} value={10}>
      <CardHeader
        title={ name }
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
        <IconButton aria-label="add to favorites">
          <GitHubIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <LanguageIcon/>
        </IconButton>
    </Card>
  );
}

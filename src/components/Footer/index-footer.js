import React from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (

        <Grid direction="row" justifyContent="center" alignItems="flex-end" container spacing={10} padding={2}>
            <Grid item xs={12} sm={1}>
                <IconButton href='https://github.com/howarde4' target="_blank">
                    <GitHubIcon fontSize='large' sx={{ color: 'white' }} />
                </IconButton>
            </Grid>
            <Grid item xs={12} sm={1}>
                <IconButton href='https://www.linkedin.com/in/emi-howard/' target="_blank">
                    <LinkedInIcon fontSize='large' sx={{ color: 'white' }} />
                </IconButton>
            </Grid>
            <Grid item xs={12} sm={1}>
                <IconButton href="mailto:emi.howard4@gmail.com" target="_blank">
                    <EmailIcon fontSize='large' sx={{ color: 'white' }} />
                </IconButton>
            </Grid>
        </Grid>



    )
}
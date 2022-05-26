import React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Grid } from "@mui/material";

export default function Resume() {

    return (
        <Grid container justifyContent='center' width='500'>
            <Card sx={{ width: '55vw', height: '70vh', border: '5px solid grey' }}>
                <CardMedia
                    component='iframe'
                    image='https://resume.creddle.io/embed/1tipmyemj2m'
                    sx={{ height: '100%', width: '100%' }}
                />
            </Card>
        </Grid>
    )
}
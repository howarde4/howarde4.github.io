import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Grid } from "@mui/material";
import { LinearProgress } from '@mui/material';

export default function Resume() {

    const [loading, setLoading] = useState(true);


    const hideSpinner = () => {
        setLoading(false);
    };



    return (
        <Grid container justifyContent='center' width='500'>
            <Card sx={{ width: '55vw', height: '70vh', border: '5px solid grey' }}>
                {loading ? (
                    <LinearProgress sx={{ marginTop: '4rem' }} />
                ) : null}
                <CardMedia
                    component='iframe'
                    image='https://resume.creddle.io/embed/1tipmyemj2m'
                    onLoad={hideSpinner}
                    sx={{ height: '100%', width: '100%' }}
                />
            </Card>
        </Grid>
    )
}
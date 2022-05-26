import React from "react";
import Logo from "../../components/NavBar/logo";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const classes = {
    root: {
        flexGrow: 1,
    },
    logo: {
        alignItems: 'flex-start',
        display: 'flex',
        justifyContent: 'center',
        mt: '-10vw',
    },
    circle: {
        position: 'absolute',
        display: 'inline-block',
        border: '2px solid white',
        borderRadius: '50%',
        width: '15rem',
        height: '15rem',
        marginTop: '-4rem',
        right: '25%',
        zindex: '1',
    }
}

export default function Home() {
    return (
        <Box mt={-22}>
            <Box style={classes.logo}>
                <Logo />
            </Box>
            <Box display='flex' textAlign='center' justifyContent='center'>
                <Box style={classes.circle}>
                    <Box sx={{ mt: 9 }}>
                        <Typography variant='description'>Software Engineer</Typography>
                        <br />
                        <Typography variant="smallPrint">{<span>based in</span>}</Typography>
                        <br />
                        <Typography variant='description'>NYC</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const classes = {
    contain: {
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    circle: {
        position: 'absolute',
        display: 'inline-block',
        border: '2px solid white',
        borderRadius: '50%',
        width: '35rem',
        height: '35rem',
        marginTop: '-12rem',
        background: 'rgba(0,0,0, 0.5)',
    }
}

const About = () => {
    return (

        <Box style={classes.contain}>
            <Box style={classes.circle}>

                <Box sx={{ mt: 5, mr: 6, ml: 6 }}>
                    <Typography variant="description">About Me</Typography>
                    <br />
                    <br />
                    <Typography variant="smallPrint">
                        {<p>Hi there! My name is Emi and I am a software engineer specializing in front and full stack development.
                            I am based in Brooklyn, New York but open to relocating or working remotely anywhere! My journey with software engineering began during
                            the pandemic when I decided to spend my time during quarantine learning a new skill. I started to learn simple coding and fell in love
                            with it! I decided to do a software engineering bootcamp and have since learned the ins and outs of engineering. I am proficient in Javascript
                            and Python and love to work with React, React Native, Express and Postgres. I can build web and mobile applications and would love to learn more to
                            become a better programmer.</p>}
                    </Typography>
                </Box>

            </Box>
        </Box>

    )
}

export default About;
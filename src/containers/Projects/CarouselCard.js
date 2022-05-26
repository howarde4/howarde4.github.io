import React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { Carousel } from "react-bootstrap";


export default function CarouselCard({ project, text, btn }) {

    return (
        <Grid item xs={12} sm={4}>
            <Card sx={{ background: 'rgb(60, 60, 60)' }} >
                <Carousel interval={null} variant="dark">
                    {project &&
                        project.map(proj => (
                            <Carousel.Item key={proj.id}>
                                {proj.id === 11 || proj.id === 12 || proj.id === 13 ?
                                    (<img
                                        style={{ height: 300, margin: 'auto' }}
                                        className="d-block"
                                        src={require(`${proj.image}`)}
                                        alt={proj.alt}
                                    />) :
                                    (<img
                                        style={{ height: 300 }}
                                        className="d-block w-100"
                                        src={require(`${proj.image}`)}
                                        alt={proj.alt}
                                    />)}

                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <CardContent>
                    <Typography variant='projectTitle'>{text.title}</Typography>
                    <br />
                    <Typography variant="projectText">{text.text}</Typography>
                    {btn}
                </CardContent>
            </Card>
        </Grid >
    )
}
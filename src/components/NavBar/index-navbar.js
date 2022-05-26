import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from "@mui/material";
import { Avatar } from "@mui/material";


const NavBar = () => {
    return (
        <AppBar position='static' sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit" component={NavLink} to='/'>Home </Button>
                    <Button color="inherit" component={NavLink} to='/about'>About </Button>
                    <Button color="inherit" component={NavLink} to='/projects'>Projects </Button>
                    <Button color="inherit" component={NavLink} to='/resume'>Resume </Button>
                </Box>
                <Box>
                    <Typography variant='name'>Emi</Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Avatar alt="Emi" src={require("./IMG_4396.png")} sx={{ width: 80, height: 80, mt: 1 }} />
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar; 
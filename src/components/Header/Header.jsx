import React from 'react'
import useStyles from './Styles'
import {Autocomplete} from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {

    const classes = useStyles()
  return (
    <AppBar position='static'>
        <Toolbar className={classes.Toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel Advisor
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Explore new places
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{root:classes.inputRoot, input:classes.InputInput}}/>
                    </div>
                {/* </Autocomplete> */}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
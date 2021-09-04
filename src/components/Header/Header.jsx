import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import { getIsSignedIn} from '../../redux/users/selector'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/img/icons/logo.png'

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    menuBar:{
        backgroundColor:"#fff",
        color: "#444",
    },
    toolBar:{
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
    iconButtons:{
        margin: '0 0 0 auto'
    }

})

const Header = () => {
    const classes = useStyles();
    const selector = useSelector(state => state.state)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

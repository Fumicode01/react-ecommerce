import React from 'react'
import { Divider, Drawer, List, ListItem, ListIconItem, ListItemText, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Search, AddCircle, HistoryIcon, Person, ExitToApp } from '@material-ui/icons'
import {textInput} from '../Uikit/index'


const useStyles = makeStyles((theme) => ({
    drawer:{
        [theme.breakpoint.up('sm')]:{
            flexShrink:0,
            width:256
        },
        toolbar:theme.mixin.toolbar,
        drawerPaper:{
            width:256
        },
        searchField:{
            alignItems:'center',
            dispaly:'flex',
            marginLeft:32
        }
    }
}))


const HeaderDrawer = (props) => {
    const classes = useStyles();
    const {container} = props;

    
    return (
        <nav className={classes.drawer}>
            <Drawer 
                container={container}
                variant="temporary"
                anchor="right"
                open={props.open}
                onClose={(e) => props.onClose(e)}
                classes={{paper:classes.drawerPaper}}
                ModalPorps = {{keepMounted:true}}
                >
                    <div>
                        <div className={searchField}>
                            <TextInput 
                                fullWidth={false}
                                label={"Search Keywards"}
                                multiline={false}
                                onChange={}
                                required={false}
                                row={1}
                                value={}
                                type={"text"}
                                />
                        </div>
                    </div>

            </Drawer>
            
        </nav>
    )
}

export default HeaderDrawer

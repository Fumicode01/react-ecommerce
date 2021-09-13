import React, {useCallback, useState} from 'react'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Search, AddCircle, History, Person, ExitToApp } from '@material-ui/icons'
import {TextInput} from '../Uikit/index'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import {signOut} from '../../redux/users/operations'


const useStyles = makeStyles((theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: 256,
                flexShrink: 0,
            }
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: 256,
        },
        searchField: {
            alignItems: 'center',
            display: 'flex',
            marginLeft: 32
        }
    }),
);


const HeaderDrawer = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {container} = props;
    const [keyword, setKeyword] = useState("")

    const inputKeyword = useCallback((event) => {
        setKeyword(event.target.value)
        },[setKeyword])


    const selectMenu = (event, path) => {
        dispatch(push(path))
        props.onClose(event)
    }

    const menus = [
        {func:selectMenu, label: "Register Product", icon:<AddCircle />, id: "register", value:"/product/edit"},
        {func:selectMenu, label: "OrderHistory", icon:<History />, id: "history", value:"/order/history"},
        {func:selectMenu, label: "Profile", icon:<Person />, id: "profile", value:"/user/mypage"}
    ]



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
                        <div className={classes.searchField}>
                            <TextInput 
                                fullWidth={false}
                                label={"Search Keyward"}
                                multiline={false}
                                onChange={inputKeyword}
                                required={false}
                                row={1}
                                value={keyword}
                                type={"text"}
                                />
                                <IconButton>
                                    <Search />
                                </IconButton>
                        </div>
                        <Divider />
                        <List>
                            {menus.map(menu => (
                                <ListItem button key={menu.id} onClick={(e) => menu.func(e, menu.value)}>
                                    <ListItemIcon>
                                        {menu.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menu.label} />
                                </ListItem>
                            ))}
                            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
                                <ListItemIcon>
                                    <ExitToApp />
                                </ListItemIcon>
                                <ListItemText primary={"Logout"} />
                            </ListItem>
                        </List>
                    </div>

            </Drawer>
            
        </nav>
    )
}

export default HeaderDrawer

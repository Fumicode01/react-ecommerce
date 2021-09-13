import React from 'react'
import { Divider, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {Delete, Icon} from '@material-ui/icons'

const useStyles = makeStyles({
    list:{
        height:128
    },
    image:{
        objectFit:'cover',
        margin:16,
        height:96,
        width:96
    },
    text:{
        width:'100%'
    }
})

const CartListItem = (props) => {
    const classes = useStyles()
    const image = props.product.images[0].path
    const name = props.product.name
    const price = props.product.price.toLocaleString();
    const size = props.product.size
    return (
        <>
            <ListItem className={classes.list}>
                <ListItemAvatar>
                    <img className={classes.img} src={image} alt="ProductImage" />
                </ListItemAvatar>
                <div className={classes.text}>
                    <ListItemText primary = {name} secondary={"Size:" + size} />
                    <ListItemText primary={'$' + price} />
                </div>
                <Icon>
                    <Delete />
                </Icon>
            </ListItem>
        </>
    )
}

export default CartListItem

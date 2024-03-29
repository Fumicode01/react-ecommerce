import React from 'react'
import { Divider, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {Delete} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import { useSelector } from 'react-redux'
import {getUserId} from '../../redux/users/selector'
import {db} from '../../firebase/index'

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
    const selector = useSelector((state) => state)
    const uid = getUserId(selector)

    const image = props.product.images[0].path
    const name = props.product.name
    const price = props.product.price.toLocaleString();
    const size = props.product.size

    const removeProductFromCart = (id) => {
        return db.collection('users').doc(uid).collection('cart').doc(id).delete()
    }

    return (
        <>
            <ListItem className={classes.list}>
                <ListItemAvatar>
                    <img className={classes.image} src={image} alt="ProductImage" />
                </ListItemAvatar>
                <div className={classes.text}>
                    <ListItemText primary = {name} secondary={"Size:" + size} />
                    <ListItemText primary={'$' + price} />
                </div>
                <IconButton onClick={() => removeProductFromCart(props.product.cartId)}>
                    <Delete />
                </IconButton>
            </ListItem>
            <Divider />
        </>
    )
}

export default CartListItem

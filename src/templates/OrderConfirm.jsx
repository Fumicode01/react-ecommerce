import React, {useCallback, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsInCart } from '../redux/users/selector'
import { makeStyles } from '@material-ui/styles'
import {CartListItem} from '../components/Products'
import List, {Divider} from '@material-ui/core'
import PrimaryButton from '../components/Uikit'


const useStyles = makeStyles((theme) =>({
    detailBox:{
        margin: '0 auto',
        [theme.breakpoint.down('sm')]:{
            width: 320
        },
        [theme.breakpoint.up('sm')]:{
            width:512
        }
    },
    orderBox:{
        border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: 4,
        boxShadow: '0 4px 2px 2px rgba(0,0,0,0.2)',
        height: 256,
        margin: '24px auto 16px auto',
        padding: 16,
        width: 288
    }
}));

export const OrderConfirm = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const productsInCart = getProductsInCart(selector)


    return (
        <section className="c-section-wrapin">
            <h2 className="u-text__headline">Order Confirmation</h2>
            <div className="p-grid__row">
                <div className={classes.detailBox}>
                    <List>
                        {productsInCart.length > 0 && (
                            productsInCart.map(product => <CartListItem product={product} key={product.cartId} />)
                        )}
                    </List>
                </div>
                <div className={classes.orderBox}>
                    
                </div>
            </div>
        </section>
    )
}

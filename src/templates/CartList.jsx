import React, { useCallback } from 'react'
import {List} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {getProductsInCart} from '../redux/users/selector'
import { CartListItem } from '../components/Products'
import { PrimaryButton, GreyButton } from '../components/Uikit'
import { push } from 'connected-react-router'
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    root: {
      margin: '0 auto',
      maxWidth: 512,
      width: '100%'
    },
  }));

const CartList = () => {
    const classes = useStyles();
    const selector = useSelector((state) => state)
    const productsInCart = getProductsInCart(selector)
    const dispatch = useDispatch()

    const goToOrder = useCallback(() => {
        dispatch(push('/order/confirm'))
    },[])

    const backToHome = useCallback(() =>{
        dispatch(push('/'))
    },[])

    return (
        <section className="c-section-wrapin">
            <h2 className="u-text__headline">Shopping Cart</h2>
            <List className={classes.root}>
                {productsInCart.length > 0 && (
                    productsInCart.map(product => <CartListItem key={product.cartId} product={product} /> )
                )}
            </List>
            <div className="module-spacer--midium" />
            <div className="p-grid__cplumn">
                <PrimaryButton label={"Go to Payment"} onClick={goToOrder} />
                <div className="module-spacer--extra-extra-small" />
                <GreyButton label={"Continue Shopping"} onClick={backToHome} />
            </div>
        </section>
    )
}

export default CartList

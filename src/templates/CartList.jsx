import React from 'react'
import {List} from '@material-ui/core'
import { useSelector } from 'react-redux'
import {getProductsInCart} from '../redux/users/selector'

const CartList = () => {
    const selector = useSelector((state) => state)
    const producstInCart = getProductsInCart(selector)
    return (
        <section className="c-section-wrappin">
            <h2 className="u-text__headline">Shopping Cart</h2>
            <List>
                {productsInCart.length > 0 && (
                    productsInCart.map(product => )
                )}
            </List>
        </section>
    )
}

export default CartList

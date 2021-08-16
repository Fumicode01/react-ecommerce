import React,{ useEffect} from 'react'
import { ProductCard } from '../components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products/operations'
import { getProducts } from '../redux/products/selectors'

const ProductList = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const products = getProducts(selector)

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    return (
        <section className="c-section-wrapin">
            <div className="p-grid__row">
                {products.length > 0 && (
                    products.map(product => (
                        <ProductCard key={product.id} />
                    ))
                )}
            </div>

        </section>
    )
}

export default ProductList

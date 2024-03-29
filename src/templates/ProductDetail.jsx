import React,{useState, useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {db, FirebaseTimestamp} from '../firebase/index'
import { makeStyles } from '@material-ui/core/Styles'
import HTMLReactParser from 'html-react-parser'
import {ImageSwiper} from '../components/Products'
import { fetchProducts } from '../redux/products/operations'
import {SizeTable} from '../components/Products'
import { addProductToCart } from '../redux/users/operations'

const useStyles = makeStyles((theme) => ({
    sliderBox:{
        [theme.breakpoints.down('sm')] : {
            margin: '0 auto 24px auto',
            height:320,
            width:320
        },
        [theme.breakpoints.up('sm')]:{
            margin: '0 auto',
            height: 400,
            width: 400
        }
    },
    detail:{
        [theme.breakpoints.down('sm')] : {
            margin: '0 auto 16px auto',
            height:'auto',
            width:320
        },
        [theme.breakpoints.up('sm')]:{
            margin: '0 auto',
            height: 'auto',
            width: 400
        }
    },
    price:{
        fontSize: 36
    }
}))

const returnCodeToBr = (text) => {
    if(text==="") {
        return text
    } else {
        return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
    }
}

const ProductDetail = () => {
    const classes = useStyles();
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const path = selector.router.location.pathname;
    const id = path.split('/product/')[1];

    const [product, setProduct] = useState(null);


    useEffect(() => {
        db.collection('products').doc(id).get()
            .then(doc => {
                const data = doc.data();
                setProduct(data);
            })
    }, [])


    const addProduct = useCallback((selectedSize) =>{
        const timestamp = FirebaseTimestamp.now();
        dispatch(addProductToCart({
            added_at:timestamp,
            description:product.description,
            gender:product.gender,
            images:product.images,
            name:product.name,
            price:product.price,
            productId:product.id,
            quantity:1,
            size:selectedSize,

        }))
    },[product])




    return (
        <section className="c-section-wrapin">
            {product && (
                <div className="p-grid_row">
                    <div className={classes.sliderBox}>
                        <ImageSwiper images={product.images}/>
                    </div>
                    <div className={classes.detail}>
                        <h2 className="u-text__headline">{product.name}</h2>
                        <p className={classes.price}>{product.price.toLocaleString()}</p>
                        <div className="module-spacer--small" />
                            <SizeTable sizes={product.sizes} addProduct={addProduct} />
                        <div className="module-spacer--small" />
                        <p>{returnCodeToBr(product.description)}</p>

                    </div>
                </div>
            )}
        </section>
    )
}

export default ProductDetail

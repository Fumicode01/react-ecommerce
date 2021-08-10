import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux';
import ImageArea from '../components/Products/ImageArea';
import { TextInput, SelectBox, PrimaryButton } from '../components/Uikit'
import { saveProduct } from '../redux/products/actions';

const ProductEdit = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState(""),
              [description, setDescription] = useState(""),
              [category, setCategory] = useState(""),
              [gender, setGender] = useState(""),
              [price, setPrice] = useState(""),
              [images, setImages] = useState([]);

    const InputName = useCallback((event) => {
            setName(event.target.value)
        }, [setName],
    )
    const InputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription],
    )

    const InputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice],
    )

    const categories = [
        {id:"tops", name:"Tops"},
        {id:"shoes", name:"Shoes"},
        {id:"cap", name:"Caps"},
        {id:"bag", name:"Bags"},

    ]
    const genders = [
        {id:"men", name:"Men"},
        {id:"wemen", name:"Wemen"},
        {id:"Unisex", name:"Unisex"},

    ]

    return (
        <section>
            <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
            <div className="module-spacer--medium" />
            <div className="c-section-container">
                <ImageArea images={images} setImages={setImages} />
                <TextInput 
                    fullWidth={true} label={"ProductName"} multiline={false} 
                    required={true} onChange={InputName} rows={1} value={name} type={'text'}
                />
                <TextInput 
                   fullWidth={true} label={"Description"} multiline={true} 
                    required={true} onChange={InputDescription} rows={5} value={description} type={'text'}
                />
                <TextInput 
                    fullWidth={true} label={"Price"} multiline={false} 
                    required={true} onChange={InputPrice} rows={1} value={price} type={'number'}
                />
                <SelectBox 
                    label={"Category"} required={true} options={categories} value={category} select={setCategory}
                />
                <SelectBox 
                    label={"Gender"} required={true} options={genders} value={gender} select={setGender}
                />
            </div>
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton 
                    label={"Submit"}
                    onClick = {()=> dispatch(saveProduct(name, description, category, gender, price, images))}
                />
            </div>
        </section>
    )
}

export default ProductEdit

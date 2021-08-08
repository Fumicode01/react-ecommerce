import React, {useState, useCallback} from 'react'
import { TextInput } from '../components/Uikit'

const ProductEdit = () => {

    const [name, setName] = useState(""),
              [description, setDescription] = useState(""),
              [category, setCategory] = useState(""),
              [gender, setGender] = useState(""),
              [price, setPrice] = useState("");

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

    return (
        <section>
            <h2 className="u-text_-headline u-text-center">Resister Products</h2>
            <div className="c-section-container">
                <TextInput 
                    fullwidth={true} label={"ProductName"} multiline={false} 
                    required={true} onChange={InputName} rows={1} value={name} type={'text'}
                />
                <TextInput 
                    fullwidth={true} label={"Description"} multiline={true} 
                    required={true} onChange={InputDescription} rows={5} value={description} type={'text'}
                />
                <TextInput 
                    fullwidth={true} label={"Price"} multiline={false} 
                    required={true} onChange={InputPrice} rows={1} value={price} type={'number'}
                />
            </div>
        </section>
    )
}

export default ProductEdit

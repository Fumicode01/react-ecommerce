import React, {useCallback} from 'react'
import { IconButton } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/styles';
import {storage} from "../../firebase/index"
import ImagePreview from './ImagePreview';


const useStyles = makeStyles({
    icon:{
        height:48,
        width:48
    }
})

const ImageArea = (props) => {
    const classes = useStyles()

    const deleteImage = useCallback ((id) => {
        const ret = window.confirm("Are you sure to delete this image?")
        if(!ret){
            return false
        } else {
            const newImages = props.images.filter(image => image.id !== id)
            props.setImages(newImages)
            return storage.ref('images').child(id).delete()
        }
    },[props.images])

    const uploadImage = useCallback((event) =>{
        const file = event.target.files;
        const blob = new Blob(file, {type: "image/jpeg"})
        const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

        const uploadRef = storage.ref('images').child(fileName);
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const newImage = {id:fileName, path: downloadURL};
                props.setImages((prevState) => [...prevState, newImage])
            })
        })
    }, [props.setImages])
    return (
        <div>
            <div className="p-grid__list-images">
                {props.images.length > 0 && (
                    props.images.map(image => <ImagePreview delete={deleteImage} path={image.path} key={image.id} id={image.id} />)
                )}
            </div>
            <div className="u-text-right">
                <span>Upload Images</span>
                <IconButton className={classes.icon}>
                    <label>
                        <AddPhotoAlternateIcon />
                        <input className="u-display-none" type="file" id="image" 
                                    onChange={(event) => uploadImage(event)}/>
                    </label>
                </IconButton>
            </div>
        </div>
        
        
    )
}

export default ImageArea

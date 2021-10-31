import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup'

// components
import Lytglobal from 'components/lytglobal'

// types
import { IItem } from 'types'

// config
import { exploreRoute, ipfsClient } from 'config'

// redux actions
import { switchDisplayMd  } from 'redux/mdpublishnew/actions'
import { publishArtwork } from 'redux/market/actions'

// styles
import {
    MdLytVeil,
    BtnClose,
    Md,
    TextInput,
    PriceInput,
    FileInput,
    BtnSubmit,
    ProgressBar,
    Title,
    ImagePreview,
    ErrorMessage,
    FormStyling
} from './styles'

const initialValues: IItem = {
    image: '',
    name: '',
    description: '',
    price: '',
}

const DataSchema = Yup.object().shape({
    name: Yup.string()
    .required('Field "Name" is not allowed to be empty'),
    description: Yup.string()
    .required('Field "Description" is not allowed to be empty'),
    price: Yup.string()
    .required('Field "Price" is not allowed to be empty'),
    image: Yup.string()
    .required('Field "File" is not allowed to be empty')
})

export default function index() {
    const router = useRouter()
    const[error, setError] = useState<string>('')
    const [progress, updProgress] = useState<number>(0)
    //@ts-ignore
    const { mdpublishnew, market } = useSelector(state => state)
    const { display } = mdpublishnew
    const { loading } = market

    const dispatch = useDispatch()
    const [imagePreview, setImagePreview] = useState<string>('')

    const hdlPublishItem = (data) => {
        if (!data.image || !data.name || !data.description || !data.price){
            setError('Debes rellenar todos los campos')
            return
        }

        if (Math.sign(data.price) !== 1){
            setError('El precio debe de ser un número positivo')
            return
        }

        setError('')
        dispatch(publishArtwork(data, () => {
            formik.setValues({})
            hdlDisplayMd()
            router.push(exploreRoute)
        }))
    }


    const hdlDisplayMd = () => dispatch(switchDisplayMd())

    const formik = useFormik({ 
        initialValues,
        onSubmit: hdlPublishItem,
        validationSchema: DataSchema,
    });

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        try {
            const added = await ipfsClient.add(file, {
                progress: (prog) => console.log('prog', prog)
            })
            const ipfsUrl = `https://ipfs.infura.io/ipfs/${added.path}`
            formik.setFieldValue('image', ipfsUrl)
            setImagePreview(ipfsUrl)
        } catch (error) {
            console.error('Something went wrong uploading a file to ipfs', error)
        }  
    }

    const hdlInputChange = (e) => {
        console.log('e.target.name', e.target.name)

        switch(e.target.name) {
            case 'image':
                uploadImage(e)
                break
            default:
                formik.setFieldValue(e.target.name, e.target.value)
        }
    }

    
    return (
        <React.Fragment>
        { display && display ? (
            <Lytglobal>
                <MdLytVeil onClick={() => hdlDisplayMd()}></MdLytVeil>
                <Md>
                    <BtnClose
                    onClick={() => hdlDisplayMd()}> 
                        close
                    </BtnClose>
                    <Title>Create single collectible</Title>
                    <FormikProvider value={formik}>
                        <Form
                        style={FormStyling}>
                            <input
                            style={TextInput}
                            type="text"
                            name="name"
                            onChange={hdlInputChange}
                            placeholder="Title for this NFT..." />

                            <input
                            style={TextInput}
                            type="text"
                            name="description"
                            onChange={hdlInputChange}
                            placeholder="Description or details about the artwork..." />


                            <PriceInput>
                                <span>eth</span>
                                <input
                                type="text"
                                name="price"
                                onChange={hdlInputChange}
                                placeholder="Enter price for this piece" />
                            </PriceInput>


                            <FileInput>
                                <input
                                name="image"
                                onChange={hdlInputChange}
                                type="file" />
                                <span>
                                    Recommended size:<br/>
                                    1000x1000px<br/>
                                    JPG, PNG or GIF.<br/>
                                    10MB max size.
                                </span>
                                <span>Drag and Drop an image here, or click to browse.</span>
                            </FileInput>


                            {
                                imagePreview && (
                                    <ImagePreview>
                                        <Image
                                        width="80px"
                                        height="80px"
                                        objectFit="cover"
                                        src={ imagePreview } />
                                    </ImagePreview>
                                )
                            }

                            {/* PROGRESS BAR */}
                            { progress && progress ? (
                                <ProgressBar>
                                    <div></div>
                                </ProgressBar>
                            ) : null }

                            
                            { error && (
                                <ErrorMessage>
                                    <span>*</span>
                                    {error}
                                </ErrorMessage>
                            )}


                            <BtnSubmit
                             type="submit"
                             disabled={loading}>
                                publish now
                            </BtnSubmit>
                        </Form>
                    </FormikProvider>
                </Md>
            </Lytglobal>
        ) : null }
        </React.Fragment>
    )
}

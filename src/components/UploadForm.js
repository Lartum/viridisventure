import React , { useState } from 'react'
import { Button, Card, Input, Select, Alert, Image } from 'antd'
import { types, categories } from '../constants/formdata'
import ProgressBar from './ProgressBar'

const UploadForm = () => { 
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ plantName, setPlantName ] = useState(null)
    const [ description, setDescription] = useState(null)
    const [ price, setPrice ] = useState(null)
    const [ status, setStatus ] = useState(false)
    const [ upload, setUpload ] = useState(false)
    const [ category, setCategory ] = useState(null)
    const [ preview, setPreview ] = useState(null)
    
    const { Option } = Select

    const handleChange = async (e) => {

    let selectedFile = e.target.files[0]
    try {
        if (selectedFile && types.includes(selectedFile.type)) {
            setError(null)
            setFile(selectedFile)
            setPreview(URL.createObjectURL(selectedFile))
            }
        else {
            setFile(null)
            setError('Upload a Valid format of image')
        } 
    } catch (error) {
        setError(error)
    }}

    const handleSubmit = ({file, plantName, description, price}) =>{
        if( file || plantName || description || price === null) {  
             setError('Fill all the required details')
        } 
        else {
            setUpload(true)
        }   
    } 

    const handleCategory = (value) => {
        setCategory(value)
    }


    return(
        <Card title='Add a new Post' style={{ width: 300, margin:'32px auto', textAlign:'center'}}>
            <Select defaultValue='Select the item to upload' onChange={ handleCategory }>
                { categories.map((option) =>(
                    <Option key={ option.key } value={ option.value }>{option.label}</Option>
                )) }
            </Select>
            { category && 
                    <>
                    <Image src={ preview } />
                    <Input required type='file' onChange= { handleChange }/>
                    { error && <Alert message={ error } type="error" />}
                    { file && <Alert message={ file.name } type="info" />}
                    { upload === true && <ProgressBar 
                                        file = { file } 
                                        setFile = { setFile } 
                                        plantName = { plantName } 
                                        setPlantName = { setPlantName } 
                                        description = { description } 
                                        setDescription = { setDescription } 
                                        price = { price }
                                        setPrice = { setPrice } 
                                        category = { category }
                                        setCategory = { setCategory }
                                        setUpload = { setUpload }      
                                        setStatus = { setStatus }
                                        />}
                    {status === true &&  <Alert message='SuccessFully Uploaded' type="success" />}                    
                    <Input placeholder="Name    " onChange={(e) => setPlantName(e.target.value)} />
                    <Input.TextArea maxLength={160} placeholder="Description max 160 characters" onChange={(e) => setDescription(e.target.value)} />
                    <Input type='number' placeholder='Price'  onChange={(e) => setPrice(e.target.value)}/>   
                    <Button type='primary' onClick={ handleSubmit }>Upload</Button>
                    </>
            }   
        </Card>
    )
}



export default UploadForm